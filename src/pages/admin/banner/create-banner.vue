<script setup>
import { useBannerStore } from '@/stores/banner'
import { storeToRefs } from 'pinia'

const { loading, error } = storeToRefs(useBannerStore())
const { createBanner } = useBannerStore()


const image = ref(null)
const image_url = ref(null)


const handleReset = () => {
  image.value = null
  image_url.value = null

}

const handleSubmit = () => {
  createBanner({
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
        Tambah Banner
      </h2>

      <VBtn
        to="/admin/konfigurasi-web/banner"
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
              <VFileInput
                v-model="image_url"
                label="Gambar "
                placeholder="Pilih Gambar "
                :error-messages="error && error.image ? [error.image] : []"
                :disabled="loading"
                show-size
                accept="image/*"
                prepend-icon="mdi-camera"
                @change="handleFileChange"
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
