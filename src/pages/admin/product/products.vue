<script setup>
import { useProductStore } from '@/stores/product'

const headers = [
  {
    text: 'Kode',
    value: 'code',
  },
  {
    text: 'Nama',
    value: 'name',
  },
  {
    text: 'Thumbnail',
    value: 'thumbnail_url',
  },
  {
    text: 'Harga',
    value: 'price',
  },
  {
    text: 'Unggulan',
    value: 'is_featured',
  },
  {
    text: 'Aktif',
    value: 'is_active',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]



const { products, loading, error, success } = storeToRefs(useProductStore())
const { fetchProducts, deleteProduct, updateActiveProduct, updateFeaturedProduct } = useProductStore()

fetchProducts()

async function handleDeleteProduct(product) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus merk ini?')
  if (confirmed) {
    await deleteProduct(product.id)
    fetchProducts()
  }
}

const showModalImage = ref(false)
const image = ref('')

function showImage(url) {
  showModalImage.value = true
  image.value = url
}

async function handleUpdateActiveProduct(product) {
  const formData = new FormData()

  formData.append('is_active', product.is_active ? 1 : 0)

  await updateActiveProduct(product.id, formData)

  fetchProducts()
}

async function handleUpdateFeaturedProduct(product) {
  const formData = new FormData()

  formData.append('is_featured', product.is_featured ? 1 : 0)

  await updateFeaturedProduct(product.id, formData)

  fetchProducts()
}

const search = ref('')
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
        Produk
      </h2>

      <VBtn
        to="/admin/produk/tambah"
        color="primary"
      >
        Tambah Produk
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Produk"
        placeholder="Cari Produk"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>
    
    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="products"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
        >
          <template #loading>
            <img
              src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
              style="width: 100px; height: 80px;"
            >
          </template>
          <template #item-thumbnail_url="item">
            <img
              :src="item.thumbnail_url"
              style="width: 100px; height: 80px; margin: 10px 0; cursor: pointer;"
              @click="() => showImage(item.thumbnail_url)"
            >
          </template>
          <template #item-price="item">
            Rp {{ item.price.toLocaleString('id-ID') }}
          </template>
          <template #item-is_active="item">
            <VSwitch
              v-model="item.is_active"
              color="primary"
              class="m-5"
              @change="() => handleUpdateActiveProduct(item)"
            />
          </template>
          <template #item-is_featured="item">
            <VSwitch
              v-model="item.is_featured"
              color="primary"
              class="m-5"
              @change="() => handleUpdateFeaturedProduct(item)"
            />
          </template>
          <template #item-operation="item">
            <VBtn
              :to="`/admin/produk/ubah/${item.id}`"
              color="primary"
              class="m-5"
              size="small"
            >
              Ubah
            </VBtn>
            <!-- DETAIL -->
            <VBtn
              :to="`/admin/produk/${item.id}`"
              color="info"
              class="m-5"
              size="small"
            >
              Detail
            </VBtn>

            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteProduct(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
async async 
