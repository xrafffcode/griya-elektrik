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
              md="12"
            >
              <VImg
                :src="image_url"
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
              md="6"
            >
              <VFileInput
                v-model="image"
                :error-messages="error && error.image ? [error.image] : []"
                :loading="loading"
                prepend-inner-icon="mdi-image"
                @change="handleFileChange"
                label="Gambar"
              >
                <template #prepend-inner>
                  <span v-if="image_name">{{ image_name }}</span>
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
                :items="[{ id: '', name: 'No Parent' }, ...categories]"
                item-title="name"
                item-value="id"
                :error-messages="error && error.parent_id ? [error.parent_id] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="sort_order"
                label="Sort Order"
                placeholder="Sort Order"
                :error-messages="error && error.sort_order ? [error.sort_order] : []"
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
const image = ref(null)
const image_name = ref('')
const image_url = ref('')
const sort_order = ref('')

const fetchCategoryData = async () => {
  try {
    const category = await fetchCategoryById(categoryId)

    code.value = category.code
    name.value = category.name
    parent_id.value = category.parent?.id
    image_url.value = category.image_url
    sort_order.value = category.sort_order
  } catch (error) {
    console.error('Error fetching category data:', error)
  }
}

onMounted(() => {
  fetchCategoryData()
  fetchEmptyCategory()
})

const handleReset = () => {
  fetchCategoryData()
}

const handleSubmit = () => {
  updateCategory({
    id: categoryId,
    code: code.value,
    name: name.value,
    image: image.value,
    parent_id: parent_id.value,
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
    image_name.value = file.name
  }
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>
