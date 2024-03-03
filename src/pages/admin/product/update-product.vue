<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        {{ name }}
      </h2>

      <VBtn
        to="/admin/produk"
        color="error"
      >
        Kembali
      </VBtn>
    </VCol>
  
    <VCol cols="12">
      <VCard>
        <VForm>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="code"
                label="Code"
                placeholder="Kode Kategori"
                :error-messages="error && error.code ? [error.code] : []"
                :loading="loading"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="name"
                label="Nama"
                placeholder="Nama Kategori"
                :error-messages="error && error.name ? [error.name] : []"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="product_category_id"
                label="Kategori"
                placeholder="Kategori Produk"
                :error-messages="error && error.product_category_id ? [error.product_category_id] : []"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="product_brand_id"
                label="Brand"
                placeholder="Brand Produk"
                :error-messages="error && error.product_brand_id ? [error.product_brand_id] : []"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="price"
                label="Harga"
                placeholder="Harga Produk"
                :error-messages="error && error.price ? [error.price] : []"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="thumbnail_url"
                label="Thumbnail"
                placeholder="Thumbnail Produk"
                :error-messages="error && error.thumbnail_url ? [error.thumbnail_url] : []"
                :loading="loading"
                prepend-inner-icon="mdi-image"
              />
            </VCol>


            <VCol cols="12">
              <VTextarea
                v-model="description"
                label="Deskripsi"
                placeholder="Deskripsi Produk"
                :error-messages="error && error.description ? [error.description] : []"
                :loading="loading"
              />
            </VCol>

            <VCol cols="12">
              <VCard>
                <VCardTitle>
                  Gambar Produk
                </VCardTitle>
                <VCardText>
                  <VRow>
                    <VCol
                      v-for="image in product_images"
                      :key="image.id"
                      cols="12"
                      md="4"
                    >
                      <VImg
                        :src="image.image_url"
                        aspect-ratio="1"
                        cover
                      />
                    </VCol>
                  </VRow>
                </VCardText>
              </VCard>
            </VCol>

            <VCol cols="12">
              <VCard>
                <VCardTitle>
                  Link Produk
                </VCardTitle>
                <VCardText>
                  <VRow>
                    <VCol
                      v-for="link in product_links"
                      :key="link.id"
                      cols="12"
                      md="4"
                    >
                      <VCard class="d-flex justify-space-between align-items-center">
                        <VCardText>
                          {{ link.name }}
                        </VCardText>
                        <VCardActions>
                          <VBtn
                            color="primary"
                            text
                            :href="link.url"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Buka
                          </VBtn>
                        </VCardActions>
                      </VCard>
                    </VCol>
                  </VRow>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useProductStore())
const { fetchProductById  } = useProductStore()

const productId = route.params.id

const code = ref('')
const name = ref('')
const product_category_id = ref('')
const product_brand_id = ref('')
const price = ref('')
const thumbnail_url = ref('')
const description = ref('')
const product_images = ref([])
const product_links = ref([])

const fetchProductData = async () => {
  try {
    const product = await fetchProductById(productId)

    code.value = product.code
    name.value = product.name
    product_category_id.value = product.category?.name
    product_brand_id.value = product.brand?.name
    price.value = product.price
    thumbnail_url.value = product.thumbnail_url
    description.value = product.description
    product_images.value = product.product_images
    product_links.value = product.product_links

  } catch (error) {
    console.error('Error fetching category data:', error)
  }
}

onMounted(() => {
  fetchProductData()
})
</script>

<style lang="scss">
.v-row{
  margin: 0px !important;
}
</style>
