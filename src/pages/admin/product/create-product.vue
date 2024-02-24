<script setup>
import { useProductStore } from '@/stores/product'
import { useProductBrandStore } from '@/stores/productBrand'
import { useProductCategoryStore } from '@/stores/productCategory'
import { storeToRefs } from 'pinia'

const { brands } = storeToRefs(useProductBrandStore())
const { categories } = storeToRefs(useProductCategoryStore())
const { fetchBrands } = useProductBrandStore()
const { fetchLeafCategories } = useProductCategoryStore()

fetchBrands()
fetchLeafCategories()


const { loading, error } = storeToRefs(useProductStore())
const { createProduct } = useProductStore()



const code = ref('AUTO')
const product_category_id = ref('')
const product_brand_id = ref('')
const name = ref('')
const thumbnail = ref(null)
const thumbnail_url = ref(null)
const description = ref('')
const price = ref('')
const is_active = ref(1)

const handleReset = () => {
  code.value = 'AUTO'
  product_category_id.value = ''
  product_brand_id.value = ''
  name.value = ''
  thumbnail.value = null
  thumbnail_url.value = null
  description.value = ''
  price.value = ''
  is_active.value = 1
}

const handleSubmit = () => {
  console.log({
    code: code.value,
    product_category_id: product_category_id.value,
    product_brand_id: product_brand_id.value,
    name: name.value,
    thumbnail: thumbnail.value,
    description: description.value,
    price: price.value,
    is_active: is_active.value,
  })
  createProduct({
    code: code.value,
    product_category_id: product_category_id.value,
    product_brand_id: product_brand_id.value,
    name: name.value,
    thumbnail: thumbnail.value,
    description: description.value,
    price: price.value,
    is_active: is_active.value,
  })
}

onUnmounted(() => {
  handleReset()

  error.value = null
})

const handleFileChange = event => {
  const file = event.target.files[0]
  if (file) {
    thumbnail.value = file
  }
}

const handleIsActive = () => {
  is_active.value = is_active.value === 1 ? 0 : 1
}
</script>


<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Produk
      </h2>

      <VBtn
        to="/admin/merk-produk"
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
                placeholder="Harga"
                :error-messages="error && error.price ? [error.price] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VFileInput
                v-model="thumbnail_url"
                label="Thumbnail"
                placeholder="Pilih Thumbnail"
                :error-messages="error && error.thumbnail ? [error.thumbnail] : []"
                @change="handleFileChange"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="description"
                label="Deskripsi"
                placeholder="Deskripsi"
                :error-messages="error && error.description ? [error.description] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VSwitch
                v-model="is_active"
                label="Aktif"
                @change="handleIsActive"
              />
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

              <VBtn
                color="secondary"
                variant="tonal"
                @click="handleReset"
              >
                Reset
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.v-row{
  margin: 0px !important;
}
</style>
