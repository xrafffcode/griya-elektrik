<script setup>
import { useClientStore } from '@/stores/client'
import { storeToRefs } from 'pinia'

const { loading, error } = storeToRefs(useClientStore())
const { createClient } = useClientStore()

const name = ref('')
const logo = ref(null)
const logo_name = ref('')
const url = ref('')

const handleReset = () => {
  name.value = ''
  logo.value = null
  logo_name.value = ''
  url.value = ''
}

const handleSubmit = () => {
  createClient({
    name: name.value,
    logo: logo.value,
    url: url.value,
  })
}

onUnmounted(() => {
  handleReset()

  error.value = null
})

const handleFileChange = e => {
  const file = e.target.files[0]

  if (file) {
    logo.value = file
    logo_name.value = file.name
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
        Client
      </h2>

      <VBtn
        to="/admin/client"
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
              md="6"
            >
              <VTextField
                v-model="name"
                label="Nama"
                placeholder="Nama Client"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="url"
                label="Link"
                placeholder="Link Client"
                :error-messages="error && error.url ? [error.url] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VFileInput
                v-model="logo_name"
                label="Logo"
                placeholder="Pilih Logo"
                :error-messages="error && error.logo ? [error.logo] : []"
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
.v-row {
  margin: 0px !important;
}
</style>
