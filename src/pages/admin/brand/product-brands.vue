<script setup>
import { useProductBrandStore } from '@/stores/productBrand'

const headers = [
  {
    text: 'Kode',
    value: 'code',
    sortable: true,

  },
  {
    text: 'Nama',
    value: 'name',
    sortable: true,

  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 200,
  },
]



const { brands, loading, error, success } = storeToRefs(useProductBrandStore())
const { fetchBrands, deleteBrand } = useProductBrandStore()

fetchBrands()

async function handleDeleteBrand(brand) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus merk ini?')
  if (confirmed) {
    await deleteBrand(brand.id)
    fetchBrands()
  }
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

  
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Merk Produk
      </h2>

      <VBtn
        to="/admin/merk-produk/tambah"
        color="primary"
      >
        Tambah Merk
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Merek"
        placeholder="Cari Merek"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>
    
    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="brands"
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
          <template #item-operation="item">
            <VBtn
              :to="`/admin/merk-produk/ubah/${item.id}`"
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
              @click="() => handleDeleteBrand(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

