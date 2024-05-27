<script setup>
import AppProductCard from '@/components/AppProductCard.vue'

import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'

const { products } = storeToRefs(useProductStore())
const { fetchFeaturedProducst } = useProductStore()

const featuredProducts = ref([])

const fetchFeaturedProducts = async () => {
  try {
    const products = await fetchFeaturedProducst()

    featuredProducts.value = products.slice(0, 6)
  } catch (error) {
    console.error('Error fetching featured products:', error)
  }
}

onMounted(() => {
  fetchFeaturedProducts()
})
</script>

<template>
  <div class="py-5">
    <div class="d-flex justify-space-between align-center ">
      <h1 class="text-h6 font-weight-bold">
        Produk Unggulan
      </h1>
      <RouterLink
        to="/produk"
        class="primary text-p text-decoration-none"
      >
        Lihat Semua
      </RouterLink>
    </div>

    <VRow class="mt-3 featured-products">
      <VCol
        v-for="product in featuredProducts"
        :key="product.id"
        md="3"
        lg="2"
        class="featured-products__item"
      >
        <AppProductCard :product="product" />
      </VCol>
    </VRow>
  </div>
</template>

<style>
@media (max-width: 768px) {
  .featured-products {
    /* scroll horizotal */
    display: flex !important;
    flex-wrap: nowrap !important;
    flex-direction: row !important;
    overflow-x: auto !important;
  }
  
  .featured-products__item {
    flex: 0 0 auto !important;
    width: 170px !important;
  }

}
</style>
