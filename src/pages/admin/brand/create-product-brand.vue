<script setup>
import { useProductBrandStore } from '@/stores/productBrand'
import { storeToRefs } from 'pinia'

const { brands, loading, error } = storeToRefs(useProductBrandStore())
const { createBrand } = useProductBrandStore()


const code = ref('AUTO')
const name = ref('')
const logo = ref(null)
const logo_name = ref('')

const handleReset = () => {
  code.value = 'AUTO'
  name.value = ''
  logo.value = null
  logo_name.value = ''
}

const handleSubmit = () => {
  createBrand({
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


<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Merk Produk
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
                placeholder="Kode Kategori"
                :error-messages="error && error.code ? [error.code] : []"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="name"
                label="Nama"
                placeholder="Nama Kategori"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VFileInput
                v-model="logo_name"
                label="Gambar"
                placeholder="Pilih Gambar"
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
