<script setup>
import AppProductCard from '@/components/AppProductCard.vue'
import { ref, onMounted } from 'vue'
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'

const { products } = storeToRefs(useProductStore())
const { fetchActiveProducts } = useProductStore()

const limitedProducts = ref([])

const fetchLimitedProducts = async () => {
  try {
    await fetchActiveProducts()

    limitedProducts.value = products.value.slice(0, 12)
  } catch (error) {
    console.error('Error fetching and limiting products:', error)
  }
}

onMounted(() => {
  fetchLimitedProducts()
})
</script>



<template>
  <div class="py-5">
    <div class="d-flex justify-space-between align-center ">
      <h1 class="text-h6 font-weight-bold">
        Produk Terbaru
      </h1>
      <RouterLink
        to="/produk"
        class="primary text-p text-decoration-none"
      >
        Lihat Semua
      </RouterLink>
    </div>

    <VRow class="mt-3 products">
      <VCol
        v-for="product in limitedProducts"
        :key="product.id"
        md="3"
        lg="2"
        class="products__item"
      >
        <AppProductCard :product="product" />
      </VCol>
    </VRow>
  </div>
</template>

<style>
@media (max-width: 768px) {
  .products {
    /* scroll horizotal */
    display: flex !important;
      flex-wrap: nowrap !important;
      flex-direction: row !important;
      overflow-x: auto !important;
  }

  .products__item {
    flex: 0 0 auto !important;
      width: 170px !important;
  }
}
</style>
