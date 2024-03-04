<script setup>
import { useBannerStore } from '@/stores/banner'

const headers = [
  {
    text: 'Gambar Desktop',
    value: 'gambar_desktop',
  },
  {
    text: 'Gambar Mobile',
    value: 'gambar_mobile',
  },
  {
    text: 'Aksi',
    value: 'operation',
  },
]



const { banners, loading, error, success } = storeToRefs(useBannerStore())
const { fetchBanners, deleteBanner } = useBannerStore()

fetchBanners()

async function handleDeleteBanner(banner) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus banner ini?')
  if (confirmed) {
    await deleteBanner(banner.id)
    fetchBanners()
  }
}

const showModalImage = ref(false)
const image = ref('')

function showImage(url) {
  showModalImage.value = true
  image.value = url
}
</script>

<template>
  <VDialog
    v-model="success"
    :max-width="400"
  >
    <VCard>
      <VCardText>
        {{ success }}
      </VCardText>
      <VCardActions>
        <VBtn
          color="primary"
          text
          @click="() => (success = false)"
        >
          Tutup
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <VDialog
    v-model="showModalImage"
    max-width="500"
  >
    <VCard>
      <VCardTitle>
        Gambar
      </VCardTitle>
      <VCardText>
        <img
          :src="image"
          style="width: 100%; height: 300px; object-fit: contain;"
        >
      </VCardText>
      <VCardActions>
        <VBtn
          color="primary"
          text
          @click="() => (showModalImage = false)"
        >
          Tutup
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
  
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Banner
      </h2>

      <VBtn
        to="/admin/konfigurasi-web/banner/tambah"
        color="primary"
      >
        Tambah Banner
      </VBtn>
    </VCol>
    
    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="banners"
          :loading="loading"
          buttons-pagination
          show-index
        >
          <template #loading>
            <img
              src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
              style="width: 100px; height: 80px;"
            >
          </template>
          <template #item-gambar_desktop="item">
            <img
              :src="item.desktop_image_url"
              style="width: 100%; height: 380px ; object-fit: contain; cursor: pointer; padding: 20px;"
              @click="() => showImage(item.image_url)"
            >
          </template>
          <template #item-gambar_mobile="item">
            <img
              :src="item.mobile_image_url"
              style="width: 100%; height: 380px ; object-fit: contain; cursor: pointer; padding: 20px;"
              @click="() => showImage(item.image_url)"
            >
          </template>
         
          <template #item-operation="item">
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteBanner(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

