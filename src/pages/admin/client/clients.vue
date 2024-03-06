<script setup>
import { useClientStore } from '@/stores/client';

const headers = [
  {
    text: 'Nama',
    value: 'name',
    sortable: true,
  },
  {
    text: 'Logo',
    value: 'logo',
    sortable: false,
  },
  {
    text: 'URL',
    value: 'url',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 200,
  },
]



const { clients, loading, error, success } = storeToRefs(useClientStore())
const {fetchClients, deleteClient } = useClientStore()

fetchClients()

async function handleDeleteClient(client) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus client ini?')
  if (confirmed) {
    await deleteClient(client.id)
    fetchClients()
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
        Client
      </h2>

      <VBtn
        to="/admin/client/tambah"
        color="primary"
      >
        Tambah Client
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Client"
        placeholder="Cari Client"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>
    
    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="clients"
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
          <template #item-logo="item">
            <img
              :src="item.logo_url || 'https://via.placeholder.com/150'"
              style="width: 100px; height: 100px; object-fit: contain;"
            >
          </template>
          <template #item-operation="item">
            <VBtn
              :to="`/admin/client/ubah/${item.id}`"
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
              @click="() => handleDeleteClient(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
@/stores/client
