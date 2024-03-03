<script setup>
import { useBranchStore } from '@/stores/branch'
import { storeToRefs } from 'pinia'

const {  loading, error } = storeToRefs(useBranchStore())
const { createBranch } = useBranchStore()


const code = ref('AUTO')
const name = ref('')
const map_url = ref('')
const iframe_map = ref('')
const address = ref('')
const city = ref('')
const email = ref('')
const phone = ref('')
const facebook = ref('')
const instagram = ref('')
const youtube = ref('')
const sort = ref(0)
const is_main = ref(1)
const is_active = ref(1)
const branch_images = ref([])

const handleReset = () => {
  code.value = 'AUTO'
  name.value = ''
  map_url.value = ''
  iframe_map.value = ''
  address.value = ''
  city.value = ''
  email.value = ''
  phone.value = ''
  facebook.value = ''
  instagram.value = ''
  youtube.value = ''
  sort.value = 0
  is_main.value = 1
  is_active.value = 1
  branch_images.value = []
}

const handleSubmit = () => {
  createBranch({
    code: code.value,
    name: name.value,
    map_url: map_url.value,
    iframe_map: iframe_map.value,
    address: address.value,
    city: city.value,
    email: email.value,
    phone: phone.value,
    facebook: facebook.value,
    instagram: instagram.value,
    youtube: youtube.value,
    sort: sort.value,
    is_main: is_main.value,
    is_active: is_active.value,
    branch_images: branch_images.value,
  })
}

onUnmounted(() => {
  handleReset()

  error.value = null
})

const getEmbedCode = () => {
  const regex = /<iframe[^>]+src="?([^"\s]+)"?[^>]*>/g

  const src = iframe_map.value.match(regex)

  if (src) {
    iframe_map.value = src[0].replace(/<iframe[^>]+src="?([^"\s]+)"?[^>]*>/g, '$1')
  }

  return iframe_map.value
}
</script>


<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Tambah Cabang
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
                label="Kode Cabang"
                placeholder="Kode Cabang"
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
                placeholder="Nama Cabang"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="map_url"
                label="Map URL"
                placeholder="Map URL"
                :error-messages="error && error.map ? [error.map] : []"
              />
            </VCol>
            

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="iframe_map"
                label="Iframe Map"
                placeholder="Iframe Map"
                :error-messages="error && error.iframe_map ? [error.iframe_map] : []"
                @input="getEmbedCode"
              />
            </VCol>

            
            <VCol
              cols="12"
              md="6"
            >
              <VTextarea
                v-model="address"
                label="Alamat"
                placeholder="Alamat"
                :error-messages="error && error.address ? [error.address] : []"
                :rows="11"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <iframe
                :src="iframe_map"
                width="100%"
                height="300"
                frameborder="0"
                style="border:0"
                allowfullscreen
              />
            </VCol>


            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="city"
                label="Kota"
                placeholder="Kota"
                :error-messages="error && error.city ? [error.city] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="email"
                label="Email"
                placeholder="Email"
                :error-messages="error && error.email ? [error.email] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="phone"
                label="Phone"
                placeholder="Phone"
                :error-messages="error && error.phone ? [error.phone] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="facebook"
                label="Facebook"
                placeholder="Facebook"
                :error-messages="error && error.facebook ? [error.facebook] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="instagram"
                label="Instagram"
                placeholder="Instagram"
                :error-messages="error && error.instagram ? [error.instagram] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="youtube"
                label="Youtube"
                placeholder="Youtube"
                :error-messages="error && error.youtube ? [error.youtube] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="sort"
                label="Sort"
                placeholder="Sort"
                :error-messages="error && error.sort ? [error.sort] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="3"
            >
              <VCheckbox
                v-model="is_main"
                label="Cabang Utama"
                :error-messages="error && error.is_main ? [error.is_main] : []"
                :true-value="1"
                @change="is_main = is_main ? 1 : 0"
              />
            </VCol>

            <VCol
              cols="12"
              md="3"
            >
              <VCheckbox
                v-model="is_active"
                label="Aktif"
                :error-messages="error && error.is_active ? [error.is_active] : []"
                :true-value="1"
                @change="is_active = is_active ? 1 : 0"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VFileInput
                v-model="branch_images"
                label="Gambar"
                placeholder="Pilih Gambar"
                :error-messages="error && error.branch_images ? [error.branch_images] : []"
                multiple
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
.v-row{
  margin: 0px !important;
}
</style>
