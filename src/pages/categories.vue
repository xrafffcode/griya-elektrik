<script setup>
import { useProductCategoryStore } from '@/stores/productCategory'
import { useRouter } from 'vue-router'

const router = useRouter()

const { categories, loading, error, success } = storeToRefs(useProductCategoryStore())
const { fetchCategories, deleteCategory } = useProductCategoryStore()

fetchCategories()

const getProductsByCategory = id => {
  router.push({ name: 'products', query: { category: id } })
}

onMounted(() => {
  document.title = 'Katagori'
})
</script>

<template>
  <VContainer class="py-5">
    <div class="d-flex justify-space-between align-center ">
      <h1 class="text-h6 font-weight-bold ">
        Kategori Produk
      </h1>
    </div>
    <VRow class="mt-3">
      <VCol
        v-for="category in categories.slice(0, 6)"
        :key="category.id"
        sm="4"
        md="3"
        lg="2"
      >
        <div
          class="d-flex flex-column align-center category"
          @click="getProductsByCategory(category.id)"
        >
          <img
            :src="category.image_url"
            alt="category.name"
            class="category-image"
          >
          <p class="text-center mt-3">
            {{ category.name }}
          </p>
        </div>
      </VCol>
    </VRow>
  </VContainer>
</template>


<style scoped>
.category {
    cursor: pointer;
}

.category-image {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #273E86;
}
</style>