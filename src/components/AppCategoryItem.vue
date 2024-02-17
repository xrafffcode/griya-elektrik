<script setup>
import { computed, defineProps, ref } from 'vue'

const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
})

const expanded = ref(false)

const hasChildren = computed(() => {
  return props.category.children && props.category.children.length > 0
})

const toggleCategory = () => {
  expanded.value = !expanded.value
}
</script>

<template>
  <li>
    <div
      class="d-flex align-items-center"
      @click="toggleCategory"
    >
      <VIcon v-if="hasChildren">
        {{ expanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
      </VIcon>

      <p>
        {{ category.name }}
      </p>
    </div>
    <template v-if="hasChildren && expanded">
      <AppCategoryItem
        v-for="child in category.children"
        :key="child.id"
        :category="child"
        :style="{ paddingLeft: '20px' }"
      />
    </template>
  </li>
</template>



<style scoped>
li {
  cursor: pointer;
  list-style: none;
}



li>div {
  padding: 8px  !important;
}

li>div:hover {
  background-color: #e0e0e0;
}

li>div>p {
  margin: 0;
}

li>div>div {
  padding: 8px 0;
}
</style>
