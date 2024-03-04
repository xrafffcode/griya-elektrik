<script setup>
import { useBannerStore } from '@/stores/banner'
import { storeToRefs } from 'pinia'

const { loading, error } = storeToRefs(useBannerStore())
const { createBanner } = useBannerStore()


const desktop_image = ref(null)
const desktop_image_url = ref(null)
const mobile_image = ref(null)
const mobile_image_url = ref(null)


const handleReset = () => {
  desktop_image.value = null
  desktop_image_url.value = null
  mobile_image.value = null
  mobile_image_url.value = null
  error.value = null
}

const handleSubmit = () => {
  createBanner({
    desktop_image: desktop_image.value,
    mobile_image: mobile_image.value,
  })
}

onUnmounted(() => {
  handleReset()

  error.value = null
})

const handleFileChange = event => {
  const file = event.target.files[0]
  if (file) {
    desktop_image.value = file
  }
}

const handleMobileFileChange = event => {
  const file = event.target.files[0]
  if (file) {
    mobile_image.value = file
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
                v-model="desktop_image_url"
                label="Gambar Desktop"
                placeholder="Pilih Gambar Desktop"
                :error-messages="error && error.desktop_image ? [error.desktop_image] : []"
                :disabled="loading"
                show-size
                accept="image/*"
                prepend-icon="mdi-camera"
                @change="handleFileChange"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VFileInput
                v-model="mobile_image_url"
                label="Gambar Mobile"
                placeholder="Pilih Gambar Mobile"
                :error-messages="error && error.mobile_image ? [error.mobile_image] : []"
                :disabled="loading"
                show-size
                accept="image/*"
                prepend-icon="mdi-camera"
                @change="handleMobileFileChange"
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
