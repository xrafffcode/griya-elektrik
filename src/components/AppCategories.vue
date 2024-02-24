<script setup>
import { useProductCategoryStore } from '@/stores/productCategory'

const { categories, loading, error, success } = storeToRefs(useProductCategoryStore())
const { fetchCategories, deleteCategory } = useProductCategoryStore()

fetchCategories()
</script>

<template>
  <div class="py-5">
    <div class="d-flex justify-space-between align-center ">
      <h1 class="text-h6 font-weight-bold ">
        Kategori
      </h1>
      <RouterLink
        to="/kategori"
        class="primary text-p text-decoration-none"
      >
        Lihat Semua
      </RouterLink>
    </div>

    <VRow class="mt-3">
      <VCol
        v-for="category in categories"
        :key="category.id"
        sm="4"
        md="3"
        lg="2"
      >
        <div class="d-flex flex-column align-center category">
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
  </div>
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
