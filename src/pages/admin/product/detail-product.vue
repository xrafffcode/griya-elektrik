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
        to="/admin/kategori-produk"
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
                readonly
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
                readonly
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
                readonly
                :loading="loading"
              />
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

const fetchProductData = async () => {
  try {
    const product = await fetchProductById(productId)

    code.value = product.code
    name.value = product.name
    product_category_id.value = product.category?.id
    product_brand_id.value = product.brand?.id
    price.value = product.price
    thumbnail_url.value = product.thumbnail_url
    description.value = product.description
    product_images.value = product.product_images

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
