<script setup>
import AppProductCard from '@/components/AppProductCard.vue'
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    name: 'Lampu',
    price: 200000,
    url: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
  },
  {
    id: 2,
    name: 'Keramik',
    price: 300000,
    url: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
  },
])
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

