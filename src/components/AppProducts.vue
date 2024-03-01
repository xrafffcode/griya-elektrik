<script setup>
import AppProductCard from '@/components/AppProductCard.vue'

import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'

const { products } = storeToRefs(useProductStore())
const { fetchProducts } = useProductStore()

fetchProducts()
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

    <VRow class="mt-3">
      <VCol
        v-for="product in products"
        :key="product.id"
        cols="6"
        sm="6"
        md="4"
        lg="3"
      >
        <AppProductCard :product="product" />
      </VCol>
    </VRow>
  </div>
</template>
