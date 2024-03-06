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
        <VForm @submit.prevent="handleSubmit">
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
              <VSelect
                v-model="product_category_id"
                :items="categories"
                label="Kategori"
                placeholder="Pilih Kategori"
                :error-messages="error && error.product_category_id ? [error.product_category_id] : []"
                item-title="name"
                item-value="id"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="product_brand_id"
                :items="brands"
                label="Merk"
                placeholder="Pilih Merk"
                :error-messages="error && error.product_brand_id ? [error.product_brand_id] : []"
                item-title="name"
                item-value="id"
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
              <VFileInput
                v-model="thumbnail"
                :error-messages="error && error.thumbnail ? [error.thumbnail] : []"
                :loading="loading"
                prepend-inner-icon="mdi-image"
              >
                <template #prepend-inner>
                  <span v-if="thumbnail_name">{{ thumbnail_name }}</span>
                </template>
              </VFileInput>
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
            <VCol
              cols="12"
              md="12"
            >
              <VFileInput
                v-model="product_images"
                label="Gambar"
                placeholder="Pilih Gambar"
                :error-messages="error && error.product_images ? [error.product_images] : []"
                multiple
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
                      v-for="image in product_image_urls"
                      :key="image.id"
                      cols="12"
                      md="4"
                    >
                      <VImg
                        :src="image.image_url"
                        aspect-ratio="1"
                        cover
                      >
                        <VBtn
                          color="error"
                          style="position: absolute; top: 8px; right: 8px;"
                          @click="() => product_images.splice(product_images.indexOf(image), 1) && product_image_urls.splice(product_image_urls.indexOf(image), 1)"
                        >
                          Hapus
                        </VBtn>
                      </VImg>
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
                <VRow>
                  <VCol
                    v-for="link in product_links"
                    :key="link.id"
                    cols="12"
                    md="12"
                  >
                    <VRow>
                      <VCol cols="5">
                        <VSelect
                          v-model="link.name"
                          :items="[
                            { name: 'Tokopedia'},
                            { name: 'Shopee'},
                            { name: 'Bukalapak'},
                            { name: 'Lazada'},
                            { name: 'Blibli'},
                            { name: 'Elevenia'},
                            { name: 'JD.ID'},
                            { name: 'Zalora'},
                            { name: 'Lainnya'},
                          ]"
                          label="Marketplace"
                          placeholder="Pilih Marketplace"
                          :error-messages="error && error.product_links ? [error.product_links] : []"
                          item-title="name"
                          item-value="name"
                        />
                      </VCol>
                      <VCol cols="6">
                        <VTextField
                          v-model="link.url"
                          label="URL"
                          placeholder="URL Link"
                        />
                      </VCol>
                      <VCol cols="1">
                        <VBtn
                          color="error"
                          style="position: relative; top: 8px;"
                          @click="() => product_links.splice(product_links.indexOf(link), 1)"
                        >
                          Hapus
                        </VBtn>
                      </VCol>
                    </VRow>
                  </VCol>
                </VRow>
              </VCard>
            </VCol>
            <VCol
              cols="12"
              class="d-flex gap-4"
            >
              <VBtn
                type="submit"
                :loading="loading"
                color="primary"
              >
                Simpan
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useProductStore } from '@/stores/product'
import { useProductBrandStore } from '@/stores/productBrand'
import { useProductCategoryStore } from '@/stores/productCategory'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useProductStore())
const { fetchProductById, updateProduct  } = useProductStore()

const { brands } = storeToRefs(useProductBrandStore())
const { categories } = storeToRefs(useProductCategoryStore())
const { fetchBrands } = useProductBrandStore()
const { fetchLeafCategories } = useProductCategoryStore()

fetchBrands()
fetchLeafCategories()

const productId = route.params.id

const code = ref('')
const name = ref('')
const product_category_id = ref('')
const product_brand_id = ref('')
const price = ref('')
const thumbnail = ref(null)
const thumbnail_name = ref('')
const description = ref('')
const is_featured = ref(0)
const is_active = ref(1)
const product_images = ref([])
const product_image_urls = ref([])
const product_links = ref([])

const fetchProductData = async () => {
  try {
    const product = await fetchProductById(productId)

    const thumbnail_file = await fetch(product.thumbnail_url)

    thumbnail_file.blob().then(blob => {
      const file = new File([blob], product.thumbnail_url.split('/').pop(), { type: blob.type })

      thumbnail.value = file
      thumbnail_name.value = product.thumbnail_url.split('/').pop()
    })

    const images = product.product_images.map(async image => {
      const file = await fetch(image.image_url)

      file.blob().then(blob => {
        const file = new File([blob], image.image_url.split('/').pop(), { type: blob.type })

        product_images.value.push(file)
      })
    })
    

    code.value = product.code
    name.value = product.name
    product_category_id.value = product.category?.id
    product_brand_id.value = product.brand?.id
    price.value = product.price
    description.value = product.description
    is_featured.value = product.is_featured === true ? 1 : 0
    is_active.value = product.is_active === true ? 1 : 0
    product_image_urls.value = product.product_images
    product_links.value = product.product_links

  } catch (error) {
    console.error('Error fetching category data:', error)
  }
}

onMounted(() => {
  fetchProductData()
})

const handleSubmit = () => {
  updateProduct({
    id: productId,
    code: code.value,
    name: name.value,
    product_category_id: product_category_id.value,
    product_brand_id: product_brand_id.value,
    price: price.value,
    thumbnail: thumbnail.value,
    description: description.value,
    is_featured: is_featured.value,
    is_active: is_active.value,
    product_images: product_images.value,
    product_links: product_links.value,
  })
}
</script>

<style lang="scss">
.v-row{
  margin: 0px !important;
}
</style>
