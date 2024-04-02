<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Merk Produk
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
                v-model="code"
                label="Code"
                placeholder="Kode Merk"
                :error-messages="error && error.code ? [error.code] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="name"
                label="Nama"
                placeholder="Nama Merk"
                :error-messages="error && error.name ? [error.name] : []"
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
                      v-model="logo_name"
                      label="Logo"
                      placeholder="Pilih Logo"
                      :error-messages="error && error.logo ? [error.logo] : []"
                      @change="handleFileChange"
                    />
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
import { useProductBrandStore } from '@/stores/productBrand'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useProductBrandStore())
const { fetchBrandById, updateBrand } = useProductBrandStore()

const brandId = route.params.id

const code = ref('')
const name = ref('')
const logo = ref(null)
const logo_name = ref('')
const logo_url = ref('')

const fetchBrandData = async () => {
  try {
    const brand = await fetchBrandById(brandId)

    code.value = brand.code
    name.value = brand.name
    logo_url.value = brand.logo_url
  } catch (error) {
    console.error('Error fetching brand data:', error)
  }
}

onMounted(() => {
  fetchBrandData()
})

const handleReset = () => {
  fetchBrandData()
}

const handleSubmit = () => {
  updateBrand({
    id: brandId,
    code: code.value,
    name: name.value,
    logo: logo.value,
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
