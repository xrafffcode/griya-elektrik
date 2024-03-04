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
              md="6"
            >
              <VFileInput
                v-model="branch_images"
                label="Gambar Cabang"
                multiple
                :error-messages="error && error.branch_images ? [error.branch_images] : []"
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
                v-if="branch_image_url.length > 0"
              >
                <VCol
                  v-for="(image, index) in branch_image_url"
                  :key="index"
                  cols="12"
                  md="3"
                >
                  <VImg
                    :src="image.image_url"
                    class="mb-2"
                  >
                    <VBtn
                      color="error"
                      style="position: absolute; top: 8px; right: 8px;"
                      @click="() => branch_images.splice(branch_images.indexOf(image), 1) && branch_image_url.splice(index, 1)" 
                    >
                      Hapus
                    </VBtn>
                  </VImg>
                </VCol>
              </VRow>
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
const { fetchBranchById, updateBranch } = useBranchStore()

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
const sort = ref(0)
const is_active = ref(0)
const is_main = ref(0)
const branch_images = ref([])
const branch_image_url = ref([])

const fetchBranchData = async () => {
  try {
    const branch = await fetchBranchById(branchId)

    const images = branch.branch_images.map(async (image) => {
      const file = await fetch(image.image_url)

      file.blob().then(blob => {
        const file = new File([blob], image.image_url.split('/').pop(), { type: blob.type })

        branch_images.value.push(file)
      })
    })

    console.log(branch.is_active)

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
    sort.value = branch.sort
    is_active.value = branch.is_active === true ? 1 : 0
    is_main.value = branch.is_main === true ? 1 : 0
    branch_image_url.value = branch.branch_images
    
  } catch (error) {
    console.error('Error fetching branch data:', error)
  }
}

onMounted(() => {
  fetchBranchData()
})

const handleSubmit = () => {
  updateBranch({
    id: branchId,
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
    is_active: is_active.value,
    is_main: is_main.value,
    branch_images: branch_images.value,
  })
}
</script>

<style lang="scss">
.v-row{
  margin: 0px !important;
}
</style>
