<script setup>
import { useProductCategoryStore } from '@/stores/productCategory'
import { storeToRefs } from 'pinia'

const { categories, loading, error } = storeToRefs(useProductCategoryStore())
const { fetchEmptyCategory, createCategory } = useProductCategoryStore()

fetchEmptyCategory()

const code = ref('AUTO')
const name = ref('')
const parent_id = ref('')
const image = ref(null)
const image_url = ref(null)

const handleReset = () => {
  code.value = 'AUTO'
  name.value = ''
  parent_id.value =  ''
  image.value = null
  image_url.value = null
}

const handleSubmit = () => {
  createCategory({
    code: code.value,
    name: name.value,
    parent_id: parent_id.value || null,
    image: image.value,
  })
}

onUnmounted(() => {
  handleReset()

  error.value = null
})

const handleFileChange = event => {
  const file = event.target.files[0]
  if (file) {
    image.value = file
  }
}
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
              md="6"
            >
              <VFileInput
                v-model="image_url"
                label="Gambar"
                placeholder="Pilih Gambar"
                :error-messages="error && error.image ? [error.image] : []"
                :disabled="loading"
                show-size
                accept="image/*"
                prepend-icon="mdi-camera"
                @change="handleFileChange"
              >
                <template #selection="{ fileNames }">
                  <template
                    v-for="fileName in fileNames"
                    :key="fileName"
                  >
                    <VChip
                      size="small"
                      label
                      color="primary"
                      class="me-2"
                    >
                      {{ fileName }}
                    </VChip>
                  </template>
                </template>
              </VFileInput>
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
