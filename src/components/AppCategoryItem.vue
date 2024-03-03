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
    <div class="d-flex align-items-center">
      <VIcon
        v-if="hasChildren"
        @click="toggleCategory"
        style="margin-right: 8px;"
      >
        {{ expanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
      </VIcon>

      <p @click="getProductsByCategory(category.id)">
        {{ category.name }}
      </p>
    </div>
    <template v-if="hasChildren && expanded">
      <AppCategoryItem
        v-for="child in category.children"
        :key="child.id"
        :category="child"
        :style="{ paddingLeft: '20px' }"
        @click="getProductsByCategory(child.id)"
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
