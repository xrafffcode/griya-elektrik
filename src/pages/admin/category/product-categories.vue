<script setup>
import { useProductCategoryStore } from '@/stores/productCategory'

const headers = [

  {
    text: 'Parent',
    value: 'parent.name',
  },
  {
    text: 'Nama',
    value: 'name',
    sortable: true,
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]



const { categories, loading, error, success } = storeToRefs(useProductCategoryStore())
const { fetchCategories, deleteCategory } = useProductCategoryStore()

fetchCategories()

async function handleDeleteCategory(category) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus kategori ini?')
  if (confirmed) {
    await deleteCategory(category.id)
    fetchCategories()
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
        Kategori Produk
      </h2>

      <VBtn
        to="/admin/kategori-produk/tambah"
        color="primary"
      >
        Tambah Kategori
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="categories"
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
              :to="`/admin/kategori-produk/ubah/${item.id}`"
              color="primary"
              class="m-5"
              size="small"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="`/admin/kategori-produk/${item.id}`"
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
              @click="() => handleDeleteCategory(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
