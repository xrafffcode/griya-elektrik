<script setup>
import upgradeBannerDark from '@images/pro/upgrade-banner-dark.png'
import upgradeBannerLight from '@images/pro/upgrade-banner-light.png'
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
import { useTheme } from 'vuetify'

// Components
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

const vuetifyTheme = useTheme()

const upgradeBanner = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? upgradeBannerLight : upgradeBannerDark
})
</script>

<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <IconBtn
          class="ms-n3 d-lg-none"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon icon="bx-menu" />
        </IconBtn>

       

        <VSpacer />

        <NavbarThemeSwitcher class="me-2" />

        <UserProfile />
      </div>
    </template>

    <template #vertical-nav-content>
      <VerticalNavLink
        :item="{
          title: 'Dashboard',
          icon: 'bx-home',
          to: '/admin/dashboard',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Kategori Produk',
          icon: 'bx-list-ul',
          to: '/admin/kategori-produk',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Merk Produk',
          icon: 'bx-purchase-tag-alt',
          to: '/admin/merk-produk',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Produk',
          icon: 'bx-package',
          to: '/admin/produk',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Client',
          icon: 'bx-user',
          to: '/admin/client',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Konfigurasi Web',
          icon: 'bx-cog',
          children: [
            {
              title: 'Cabang',
              to: '/admin/konfigurasi-web/cabang',
            },
            {
              title: 'Banner',
              to: '/admin/konfigurasi-web/banner',  
            }
          ],
        }"
      />
    </template>

  

    <!-- 👉 Pages -->
    <slot />
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
