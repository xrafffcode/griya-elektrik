<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Kategori Produk
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
                :disabled="loading"
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
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VSelect
                v-model="parent_id"
                label="Parent"
                :items="[{ id: '', name: 'No Parent' } , ...categories]"
                item-title="name"
                item-value="id"
                :error-messages="error && error.parent_id ? [error.parent_id] : []"
                :disabled="loading"
                :loading="loading"
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
                type="reset"
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

<script setup>
import { useProductCategoryStore } from '@/stores/productCategory'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { categories, loading, error } = storeToRefs(useProductCategoryStore())
const { fetchCategoryById, updateCategory, fetchEmptyCategory } = useProductCategoryStore()

const categoryId = route.params.id

const code = ref('')
const name = ref('')
const parent_id = ref('')

const fetchCategoryData = async () => {
  try {
    const category = await fetchCategoryById(categoryId)

    code.value = category.code
    name.value = category.name
    parent_id.value = category.parent?.id
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
}

const handleSubmit = () => {
  updateCategory({
    id: categoryId,
    code: code.value,
    name: name.value,
    parent_id: parent_id.value,
  })
}

onUnmounted(() => {
  handleReset()

  error.value = null
})
</script>

<style lang="scss">
.v-row{
  margin: 0px !important;
}
</style>
