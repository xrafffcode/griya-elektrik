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
    text: 'Aktif',
    value: 'is_active',
  },
  {
    text: 'Cabang Utama',
    value: 'is_main',
  },
  {
    text: 'Urutan Tampil',
    value: 'sort',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 200,
  },
]



const { branches, loading, error, success } = storeToRefs(useBranchStore())
const { fetchBranches, deleteBranch, updateActiveBranch, updateMainBranch } = useBranchStore()

fetchBranches()

async function handleDeleteBranch(branch) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus cabang ini?')
  
  if (confirmed) {
    await deleteBranch(branch.id)
    fetchBranches()
  }
}

async function  handleUpdateActiveBranch(branch) {
  const formData = new FormData()

  formData.append('is_active', branch.is_active ? 1 : 0)

  await updateActiveBranch(branch.id, formData)

  fetchBranches()
}

async function handleUpdateMainBranch(branch) {
  const formData = new FormData()

  formData.append('is_main', branch.is_main ? 1 : 0)

  await updateMainBranch(branch.id, formData)

  fetchBranches()
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
          <template #item-is_active="item">
            <VSwitch
              v-model="item.is_active"
              color="primary"
              class="m-5"
              @change="() => handleUpdateActiveBranch(item)"
            />
          </template>
          <template #item-is_main="item">
            <VSwitch
              v-model="item.is_main"
              color="primary"
              class="m-5"
              @change="() => handleUpdateMainBranch(item)"
            />
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

