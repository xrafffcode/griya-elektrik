<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  item: {
    type: null,
    required: true,
  },
})

const isSubItemsOpen = ref(false)

const toggleSubItems = () => {
  isSubItemsOpen.value = !isSubItemsOpen.value
}
</script>


<template>
  <li
    v-if="!item.children"
    class="nav-link"
    :class="{ disabled: item.disable }"
  >
    <Component
      :is="item.to ? 'RouterLink' : 'a'"
      :to="item.to"
      :href="item.href"
    >
      <VIcon
        :icon="item.icon"
        class="nav-item-icon"
      />
      <!-- 👉 Title -->
      <span class="nav-item-title">
        {{ item.title }}
      </span>
    </Component>
  </li>

  <li
    v-else
    class="nav-link" 
  >
    <a
      class="nav-item"
      :class="{ active: isSubItemsOpen }"
      @click="toggleSubItems"
    >
      <VIcon
        :icon="item.icon"
        class="nav-item-icon"
      />
      <!-- 👉 Title -->
      <span class="nav-item-title">
        {{ item.title }}
      </span>
      <VIcon
        :icon="isSubItemsOpen ? 'bx-chevron-up' : 'bx-chevron-down'"
        class="nav-item-icon"
      />
    </a>

    <ul
      v-show="isSubItemsOpen"
      class="nav-sub-items"
    >
      <VerticalNavLink
        v-for="subItem in item.children"
        :key="subItem.title"
        :item="subItem"
      />
    </ul>
  </li>
</template>

<style lang="scss">
.layout-vertical-nav {
  .nav-link a {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
