
<script setup>
import AppFooter from '@/components/AppFooter.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="layout-wrapper layout-blank">
    <AppNavbar />
    <RouterView />
    <AppFooter />
  </div>
</template>

<style>
.layout-wrapper.layout-blank {
  flex-direction: column;
}

.layout-wrapper.layout-blank{
  background-color: #fff !important;
}
</style>
