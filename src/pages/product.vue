<template>
  <VContainer class="my-5">
    <VRow>
      <VCol
        cols="12"
        sm="12"
        md="4"
        lg="4"
      >
        <img
          :src="activeImage.image_url"
          alt="product image"
          class="active-product-image"
        >
        <div class="d-flex image-list">
          <img
            v-for="image in product_images"
            :key="image.id"
            :src="image.image_url"
            alt="product image"
            class="product-image"
            :class="{ 'active': activeImage.id === image.id }"
            @click="changeActiveImage(image)"
          >
        </div>
      </VCol>
      <VCol
        cols="12"
        sm="6"
        md="5"
        lg="5"
      >
        <h2 class="product-name">
          {{ name }}
        </h2>
        <h2 class="mb-2">
          {{ price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}
        </h2>
        <p>{{ description }}</p>
      </VCol>
     
      <VCol
        cols="12"
        sm="6"
        md="3"
        lg="3"
        class="d-none d-md-block"
      >
        <VCard
          variant="outlined"
          class="p-5"
        >
          <h3 class="mb-4">
            Beli Sekarang di
          </h3>
          <div class="d-flex flex-column">
            <VBtn
              v-for="link in product_links"
              :key="link.id"
              :href="link.url"
              target="_blank"
              class="p-2 mb-2"
              :class="link.name"
            >
              {{ link.name }}
            </VBtn>
          </div>
        </VCard>
      </VCol>
    </VRow>
    <div class="mobile-buy">
      <VRow>
        <VCol
          cols="5"
          sm="5"
          md="5"
        >
          <VBtn
            block
            variant="outlined"
            @click="showShare"
          >
            <VIcon>mdi-share-variant</VIcon>
            Bagikan
          </VBtn>
        </VCol>
        <VCol
          cols="7"
          sm="7"
          md="7"
        >
          <VBtn
            block
            @click="showMobileBuy"
          >
            <VIcon>mdi-cart</VIcon>
            Beli Sekarang
          </VBtn>
        </VCol>
      </VRow>
    </div>

    <div
      v-if="showModalMobileBuy"
      class="overlay"
      @click="hideMobileBuy"
    />

    <div
      class="buy-modal"
      :style="{ transform: showModalMobileBuy ? 'translateY(0)' : 'translateY(100%)' }"
    >
      <div class="d-flex flex-column justify-content-between ">
        <div class="d-flex justify-content-end w-100 mb-3">
          <VIcon @click="hideMobileBuy">
            mdi-close
          </VIcon>
        </div>
        <div class="d-flex flex-column">
          <VBtn
            v-for="link in product_links"
            :key="link.id"
            :href="link.url"
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 mb-2"
            :class="link.name"
          >
            Beli di {{ link.name }}
          </VBtn>
        </div>
      </div>
    </div>

    <VDialog
      v-model="showModalShare"
      max-width="290"
    >
      <VCard>
        <VBtn
          icon="mdi-close"
          variant="text"
          class="ml-auto"
          @click="hideShare"
        />
        <div class="px-5">
          <h3 class="mb-4">
            Bagikan
          </h3>
          <div class="d-flex justify-space-between mb-5">
            <VBtn
              class="p-2"
              @click="shareToFacebook"
            >
              <VIcon>mdi-facebook</VIcon>
            </VBtn>
            <VBtn
              class="p-2"
              @click="shareToWhatsapp"
            >
              <VIcon>mdi-whatsapp</VIcon>
            </VBtn>
            <VBtn
              class="p-2"
              @click="copyLink"
            >
              <VIcon>mdi-link</VIcon>
            </VBtn>
          </div>
        </div>
      </VCard>
    </VDialog>
  </VContainer>
</template>


<script setup>
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useProductStore())
const { fetchProductBySlug  } = useProductStore()

const productSLug = route.params.slug

const code = ref('')
const name = ref('')
const product_category_id = ref('')
const product_brand_id = ref('')
const price = ref('')
const thumbnail_url = ref('')
const description = ref('')
const product_images = ref([])
const product_links = ref([])

const activeImage = ref({})

const fetchProductData = async () => {
  try {
    const product = await fetchProductBySlug(productSLug)

    code.value = product.code
    name.value = product.name
    product_category_id.value = product.category?.id
    product_brand_id.value = product.brand?.id
    price.value = product.price
    thumbnail_url.value = product.thumbnail_url
    description.value = product.description
    product_images.value = product.product_images
    product_links.value = product.product_links
    activeImage.value = product.product_images[0]
  } catch (error) {
    console.error('Error fetching category data:', error)
  }
}

onMounted(() => {
  fetchProductData()
})

const changeActiveImage = image => {
  activeImage.value = image
}

const showModalMobileBuy = ref(false)

const showMobileBuy = () => {
  showModalMobileBuy.value = true
}

const hideMobileBuy = () => {
  showModalMobileBuy.value = false
}


const showModalShare = ref(false)

const showShare = () => {
  showModalShare.value = true
}

const hideShare = () => {
  showModalShare.value = false
}

const shareToFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`

  window.open(url, '_blank')
}

const shareToWhatsapp = () => {
  const url = `https://api.whatsapp.com/send?text=${window.location.href}`

  window.open(url, '_blank')
}

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href)

  hideShare()

  alert('Link berhasil disalin')
}
</script>

<style>
.active-product-image {
  width: 100%;
  height: 300px !important;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 10px;
}

.product-image {
  width: 100px !important;
  height: 100px !important;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 1rem;
  cursor: pointer;
  border: 3px solid #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-image.active {
  border: 3px solid #273E86;
}

.p-5 {
  padding: 1.25rem !important;
}

.Shopee {
  background-color: #ee4d2d !important;
  color: #f5f5f5;
}

.Tokopedia {
  background-color: #00AA5B !important;
  color: #f5f5f5;
}

.Bukalapak {
  background-color: #e31e52 !important;
  color: #f5f5f5;
}

.Lazada {
  background-color: #f57224  !important;
  color: #f5f5f5;
}

.Blibli {
  background-color: #0072ff !important;
  color: #f5f5f5;
}

.image-list{
  overflow-x: auto;
  white-space: nowrap;
  margin-bottom: 1rem;
}

.image-list img:last-child {
  margin-right: 0;
}

.image-list::-webkit-scrollbar {
  display: none;
}

.image-list {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.image-list img {
  cursor: pointer;
}

.mobile-buy {
  display: none;
}

.justify-content-end {
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .mobile-buy {
    background-color: #fff;
    padding: 1rem;
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .scroll-to-top {
    display: none  !important;
  }

  .product-name {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
}

.buy-modal{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  height: fit-content;
  background-color: white;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  transition: transform 0.3s ease-in-out;
  padding: 1rem;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}
</style>
