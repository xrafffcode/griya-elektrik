<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        {{ name }}
      </h2>

      <VBtn
        to="/admin/konfigurasi-web/cabang"
        color="error"
      >
        Kembali
      </VBtn>
    </VCol>
  
    <VCol cols="12">
      <VCard>
        <VForm>
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
                readonly
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
                readonly
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
                readonly
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
                readonly
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
                readonly
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
                aria-hidden="false"
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
                readonly
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
                readonly
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
                readonly
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
                readonly
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
                readonly
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
                readonly
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
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VLabel
                for="branch_images"
                class="mb-2"
              >
                Gambar Cabang
              </VLabel>
              <VRow
                v-if="branch_images.length > 0"
              >
                <VCol
                  v-for="(image, index) in branch_images"
                  :key="index"
                  cols="12"
                  md="3"
                >
                  <VImg
                    :src="image.image_url"
                    width="100%"
                    height="200"
                    class="mb-2"
                  />
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useBranchStore } from '@/stores/branch'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useBranchStore())
const { fetchBranchById } = useBranchStore()

const branchId = route.params.id

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
const branch_images = ref([])

const fetchBranchData = async () => {
  try {
    const branch = await fetchBranchById(branchId)

    code.value = branch.code
    name.value = branch.name
    map_url.value = branch.map_url
    iframe_map.value = branch.iframe_map
    address.value = branch.address
    city.value = branch.city
    email.value = branch.email
    phone.value = branch.phone
    facebook.value = branch.facebook
    instagram.value = branch.instagram
    youtube.value = branch.youtube
    branch_images.value = branch.branch_images
    
  } catch (error) {
    console.error('Error fetching branch data:', error)
  }
}

onMounted(() => {
  fetchBranchData()
})
</script>

<style lang="scss">
.v-row{
  margin: 0px !important;
}
</style>
