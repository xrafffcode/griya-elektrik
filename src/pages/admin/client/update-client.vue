<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Client
      </h2>

      <VBtn
        to="/admin/merk-produk"
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
                :disabled="loading"
                :loading="loading"
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
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCard>
                <VCardTitle>
                  Logo
                </VCardTitle>
                <VCardText>
                  <VRow>
                    <VCol
                      cols="12"
                      md="12"
                    >
                      <VImg
                        v-if="logo_url"
                        :src="logo_url"
                        cover
                        style="width: 100%; height: auto;"
                      />
                    </VCol>
                  </VRow>
                  <VRow
                    cols="12"
                    md="12"
                  >
                    <VFileInput
                      v-model="logo"
                      :error-messages="error && error.logo ? [error.logo] : []"
                      :loading="loading"
                      prepend-inner-icon="mdi-logo"
                      @change="handleFileChange"
                    >
                      <template #prepend-inner>
                        <span v-if="logo_name">{{ logo_name }}</span>
                      </template>
                    </VFileInput>
                  </VRow>
                </VCardText>
              </VCard>
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
                type="reset"
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

<script setup>
import { useClientStore } from '@/stores/client'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useClientStore())
const { fetchClientById, updateClient } = useClientStore()

const clientId = route.params.id

const name = ref('')
const logo = ref(null)
const logo_name = ref('')
const url = ref('')
const logo_url = ref('')

const fetchClientData = async () => {
  try {
    const client = await fetchClientById(clientId)

    name.value = client.name
    url.value = client.url
    logo_url.value = client.logo_url
  } catch (error) {
    console.error('Error fetching client data:', error)
  }
}

onMounted(() => {
  fetchClientData()
})

const handleReset = () => {
  name.value = ''
  logo.value = null
  logo_name.value = ''
  url.value = ''
  logo_url.value = ''
}

const handleSubmit = () => {
  updateClient({
    id: clientId,
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

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>
