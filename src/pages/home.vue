<script setup>
import AppBanner from '@/components/AppBanner.vue'
import AppCategories from '@/components/AppCategories.vue'
import AppClient from '@/components/AppClient.vue'
import AppFeaturedProducts from '@/components/AppFeaturedProducts.vue'
import AppInstagram from '@/components/AppInstagram.vue'
import AppProducts from '@/components/AppProducts.vue'
import AppSearch from '@/components/AppSearch.vue'
import AppTestimonial from '@/components/AppTestimonial.vue'
import AppBrand from '@/components/AppBrand.vue'

import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Home'
})

const modalRating = ref(false)

setTimeout(() => {
  modalRating.value = true
}, 5000)
</script>

<template>
  <VContainer class="mt-5">
    <AppSearch />
  </VContainer>

  <AppBanner />

  <VContainer>
    <AppBrand class="mt-5" />

    <AppCategories class="mt-5" />

    <AppFeaturedProducts class="mt-5" />

    <AppTestimonial class="mt-5" />

    <AppProducts class="mt-5" />

    <AppInstagram class="mt-5" />

    <AppClient  />
  </VContainer>
</template>
  
