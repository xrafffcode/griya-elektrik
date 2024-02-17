<script setup>
import { useProductCategoryStore } from '@/stores/productCategory'
import { storeToRefs } from 'pinia'

const { categories, loading, error } = storeToRefs(useProductCategoryStore())
const { fetchEmptyCategory, createCategory } = useProductCategoryStore()

fetchEmptyCategory()

const code = ref('AUTO')
const name = ref('')
const parent_id = ref('')

const handleReset = () => {
  code.value = 'AUTO'
  name.value = ''
  parent_id.value =  ''
}

const handleSubmit = () => {
  createCategory({
    code: code.value,
    name: name.value,
    parent_id: parent_id.value || null,
  })
}

onUnmounted(() => {
  handleReset()

  error.value = null
})
</script>


<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Kategori Produk
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
