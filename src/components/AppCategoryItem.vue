<script setup>
import { computed, defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

const expanded = ref(false)

const hasChildren = computed(() => {
  return props.category.children && props.category.children.length > 0
})

const toggleCategory = () => {
  expanded.value = !expanded.value
}

const getProductsByCategory = id => {
  router.push({ name: 'products', query: { category: id } })
}
</script>

<template>
  <li>
    <div class="d-flex align-items-center gap-2">
      <VIcon
        v-if="hasChildren"
        class="icon"
        size="32"
        @click="toggleCategory"
      >
        {{ expanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
      </VIcon>

      <p
        class="name"
        @click="getProductsByCategory(category.slug)"
      >
        {{ category.name }} {{ category.product_count === 0 ? '' : `(${category.product_count})` }}
      </p>
    </div>
    <template v-if="hasChildren && expanded">
      <AppCategoryItem
        v-for="child in category.children"
        :key="child.id"
        :category="child"
        :style="{ paddingLeft: '40px' }"
        @click="getProductsByCategory(child.slug)"
      />
    </template>
  </li>
</template>



<style scoped>
li {
  list-style: none;
}

li>div {
  padding: 8px  !important;
}

li>div>p {
  margin: 0;
}

li>div>div {
  padding: 8px 0;
}

.icon {
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 4px;
  border-radius: 4px;

}

.icon:hover {
  background-color: #f5f5f5;
}

.name {
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 4px;
  width: 100%;
  border-radius: 4px;
}

.name:hover {
  background-color: #f5f5f5;
  width: 100%;
}
</style>
