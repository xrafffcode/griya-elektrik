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
              md="12"
            >
              <VImg
                :src="image"
                width="200"
                height="auto"
                class="mb-4"
              />
            </VCol>
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
                v-model="sort_order"
                label="Sort Order"
                placeholder="Sort Order"
                :error-messages="error && error.sort_order ? [error.sort_order] : []"
                readonly
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="parent_id"
                label="Parent"
                :items="[{ id: '', name: 'No Parent' } , ...categories]"
                item-title="name"
                item-value="id"
                :error-messages="error && error.parent_id ? [error.parent_id] : []"
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
import { useProductCategoryStore } from '@/stores/productCategory'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { categories, loading, error } = storeToRefs(useProductCategoryStore())
const { fetchCategoryById, fetchEmptyCategory } = useProductCategoryStore()

const categoryId = route.params.id

const code = ref('')
const name = ref('')
const parent_id = ref('')
const image = ref(null)
const sort_order = ref('')

const fetchCategoryData = async () => {
  try {
    const category = await fetchCategoryById(categoryId)

    code.value = category.code
    name.value = category.name
    parent_id.value = category.parent?.id
    image.value = category.image_url
    sort_order.value = category.sort_order
  } catch (error) {
    console.error('Error fetching category data:', error)
  }
}

onMounted(() => {
  fetchCategoryData()
  fetchEmptyCategory()
})

const showImage = ref(false)
</script>

<style lang="scss">
.v-row{
  margin: 0px !important;
}
</style>
