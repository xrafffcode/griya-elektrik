<script setup>
import AppBanner from '@/components/AppBanner.vue'
import AppCategories from '@/components/AppCategories.vue'
import AppFeaturedProducts from '@/components/AppFeaturedProducts.vue'
import AppInstagram from '@/components/AppInstagram.vue'
import AppProducts from '@/components/AppProducts.vue'
import AppSearch from '@/components/AppSearch.vue'
import AppTestimonial from '@/components/AppTestimonial.vue'

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

    <AppBanner class="mt-5" />

    <AppCategories class="mt-5" />

    <AppFeaturedProducts class="mt-5" />

    <AppTestimonial class="mt-5" />

    <AppProducts class="mt-5" />

    <AppInstagram class="mt-5" />

    <!--
      <VDialog v-model="modalRating" max-width="400">
      <VCard>
      <VCardTitle class="headline">Rating</VCardTitle>
      <VCardText>
      <p>
      Bantu kami dengan memberikan rating di Google,
      </p>
      </VCardText>
      <VCardActions>
      <VBtn color="primary" text @click="modalRating = false">
      Nanti saja
      </VBtn>
      <VBtn color="primary" text @click="modalRating = false" href="https://maps.app.goo.gl/TvmHJDTboqmmKbG89"
      target="_blank">
      Beri rating
      </VBtn>
      </VCardActions>
      </VCard>
      </VDialog> 
    -->
  </VContainer>
</template>
  
