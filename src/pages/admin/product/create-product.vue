<script setup>
import Editor from '@tinymce/tinymce-vue'
import { useProductStore } from '@/stores/product'
import { useProductBrandStore } from '@/stores/productBrand'
import { useProductCategoryStore } from '@/stores/productCategory'
import { storeToRefs } from 'pinia'

const { brands } = storeToRefs(useProductBrandStore())
const { categories } = storeToRefs(useProductCategoryStore())
const { fetchBrands } = useProductBrandStore()
const { fetchLeafCategories } = useProductCategoryStore()

fetchBrands()
fetchLeafCategories()


const { loading, error } = storeToRefs(useProductStore())
const { createProduct } = useProductStore()



const code = ref('AUTO')
const product_category_id = ref('')
const product_brand_id = ref('')
const name = ref('')
const thumbnail = ref(null)
const thumbnail_url = ref(null)
const description = ref('')
const price = ref('')
const is_active = ref(1)
const is_featured = ref(0)
const product_images = ref([])
const product_links = ref([])

const handleReset = () => {
  code.value = 'AUTO'
  product_category_id.value = ''
  product_brand_id.value = ''
  name.value = ''
  thumbnail.value = null
  thumbnail_url.value = null
  description.value = ''
  price.value = ''
  is_active.value = 1
  is_featured.value = 0
  product_images.value = []
  product_links.value = []
}

const handleSubmit = () => {
  createProduct({
    code: code.value,
    product_category_id: product_category_id.value,
    product_brand_id: product_brand_id.value,
    name: name.value,
    thumbnail: thumbnail.value,
    description: description.value,
    price: price.value.replace(/\D/g, ''),
    is_active: is_active.value,
    is_featured: is_featured.value,
    product_images: product_images.value,
    product_links: product_links.value,
  })
}

onUnmounted(() => {
  handleReset()

  error.value = null
})

const handleFileChange = event => {
  const file = event.target.files[0]
  if (file) {
    thumbnail.value = file
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
        Produk
      </h2>

      <VBtn
        to="/admin/produk"
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
              md="6"
            >
              <VSelect
                v-model="product_category_id"
                :items="categories"
                label="Kategori"
                placeholder="Pilih Kategori"
                :error-messages="error && error.product_category_id ? [error.product_category_id] : []"
                item-title="name"
                item-value="id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="product_brand_id"
                :items="brands"
                label="Merk"
                placeholder="Pilih Merk"
                :error-messages="error && error.product_brand_id ? [error.product_brand_id] : []"
                item-title="name"
                item-value="id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                #prepend
                v-model="price"
                label="Harga"
                placeholder="Harga"
                :error-messages="error && error.price ? [error.price] : []"
                @input="price = price.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
              >
                <span>Rp</span>
              </VTextField>
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VFileInput
                v-model="thumbnail_url"
                label="Thumbnail"
                placeholder="Pilih Thumbnail"
                :error-messages="error && error.thumbnail ? [error.thumbnail] : []"
                @change="handleFileChange"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VLabel>
                Deskripsi
              </VLabel>
              <Editor
                v-model="description"
                api-key="n6beu7xtuj1u7n0h0iceun23wfp8deo64vo273d6hbhhw7p9"
                :init="{
                  toolbar_mode: 'sliding',
                  plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                  tinycomments_mode: 'embedded',
                  tinycomments_author: 'Author name',
                  mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' },
                  ],
                }"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VFileInput
                v-model="product_images"
                label="Gambar"
                placeholder="Pilih Gambar"
                :error-messages="error && error.product_images ? [error.product_images] : []"
                multiple
              />
            </VCol>

            <VCol
              cols="12"
              md="4"
            >
              <VBtn
                color="primary"
                @click="() => product_links.push({ name: '', url: '' })"
              >
                Tambah Link Marketplace
              </VBtn>
            </VCol>

            <VCol
              v-for="(link, index) in product_links"
              :key="index"
              cols="12"
              md="12"
            >
              <VRow>
                <VCol
                  cols="12"
                  md="5"
                >
                  <VSelect
                    v-model="link.name"
                    :items="[
                      { name: 'Tokopedia' },
                      { name: 'Shopee' },
                      { name: 'Bukalapak' },
                      { name: 'Lazada' },
                      { name: 'Blibli' },
                      { name: 'Elevenia' },
                      { name: 'JD.ID' },
                      { name: 'Zalora' },
                      { name: 'Whatsapp' },
                      { name: 'Lainnya' },
                    ]"
                    label="Marketplace"
                    placeholder="Pilih Marketplace"
                    :error-messages="error && error.product_links ? [error.product_links] : []"
                    item-title="name"
                    item-value="name"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="5"
                >
                  <VTextField
                    v-model="link.url"
                    label="URL"
                    placeholder="URL"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="2"
                >
                  <VBtn
                    color="error"
                    block
                    size="x-large"
                    @click="() => product_links.splice(index, 1)"
                  >
                    Hapus
                  </VBtn>
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
