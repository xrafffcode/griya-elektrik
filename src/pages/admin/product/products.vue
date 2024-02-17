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
    text: 'Harga',
    value: 'price',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 200,
  },
]



const { products, loading, error, success } = storeToRefs(useProductStore())
const { fetchProducts, deleteProduct } = useProductStore()

fetchProducts()

async function handleDeleteProduct(product) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus merk ini?')
  if (confirmed) {
    await deleteProduct(product.id)
    fetchProducts()
  }
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
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="products"
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
          <template #item-operation="item">
            <VBtn
              :to="`/admin/produk/ubah/${item.id}`"
              color="primary"
              class="m-5"
              size="small"
            >
              Ubah
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

