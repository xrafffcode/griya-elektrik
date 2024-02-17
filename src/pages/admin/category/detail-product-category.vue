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
                v-model="slug"
                label="Slug"
                placeholder="Slug Kategori"
                :error-messages="error && error.slug ? [error.slug] : []"
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
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { categories, loading, error } = storeToRefs(useProductCategoryStore())
const { fetchCategoryById, fetchEmptyCategory } = useProductCategoryStore()

const categoryId = route.params.id

const code = ref('')
const name = ref('')
const parent_id = ref('')
const slug = ref('')

const fetchCategoryData = async () => {
  try {
    const category = await fetchCategoryById(categoryId)

    code.value = category.code
    name.value = category.name
    parent_id.value = category.parent?.id
    slug.value = category.slug
  } catch (error) {
    console.error('Error fetching category data:', error)
  }
}

onMounted(() => {
  fetchCategoryData()
  fetchEmptyCategory()
})

const handleReset = () => {
  code.value = ''
  name.value = ''
  parent_id.value = ''
  slug.value = ''
}

onUnmounted(() => {
  handleReset()
})
</script>

<style lang="scss">
.v-row{
  margin: 0px !important;
}
</style>
