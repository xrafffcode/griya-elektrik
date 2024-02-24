<script setup>
import { useBranchStore } from '@/stores/branch'

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
    text: 'Alamat',
    value: 'address',
  },
  {
    text: 'Telepon',
    value: 'phone',
  },
  {
    text: 'Email',
    value: 'email',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 200,
  },
]



const { branches, loading, error, success } = storeToRefs(useBranchStore())
const { fetchBranches, deleteBranch } = useBranchStore()

fetchBranches()

async function handleDeleteBranch(branch) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus cabang ini?')
  
  if (confirmed) {
    await deleteBranch(branch.id)
    fetchBranches()
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
        Cabang
      </h2>

      <VBtn
        to="/admin/konfigurasi-web/cabang/tambah"
        color="primary"
      >
        Tambah
      </VBtn>
    </VCol>
    
    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="branches"
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
              @click="() => handleDeleteBranch(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

