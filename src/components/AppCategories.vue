<script setup>
import { useProductCategoryStore } from '@/stores/productCategory'
import { useRouter } from 'vue-router'

const router = useRouter()

const { categories, loading, error, success } = storeToRefs(useProductCategoryStore())
const { fetchRootCategories } = useProductCategoryStore()

fetchRootCategories()

const getProductsByCategory = slug => {
  router.push({ name: 'products', query: { category: slug } })
}
</script>

<template>
  <div class="py-5">
    <div class="d-flex justify-space-between align-center ">
      <h1 class="text-h6 font-weight-bold ">
        Kategori
      </h1>
      <RouterLink
        to="/kategori-produk"
        class="primary text-p text-decoration-none"
      >
        Lihat Semua
      </RouterLink>
    </div>

    <VRow class="mt-3 category-container">
      <VCol
        v-for="category in categories"
        :key="category.slug"
        cols="4"
        md="6"
        lg="2"
        class="category-container__item"
      >
        <div
          class="category"
          @click="getProductsByCategory(category.slug)"
        >
          <img
            :src="category.image_url"
            alt="category.name"
            class="category-image"
          >
          <p class="text-center mt-3">
            {{ category.name }} {{ category.product_count ? `(${category.product_count})` : '' }}
          </p>
        </div>
      </VCol>
    </VRow>
  </div>
</template>


<style scoped>
.category-container{
  display: flex;
  justify-content: center;
}

.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.category-image {
  width: 130px;
  height: 130px;
  object-fit: cover;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 5px;
  border-radius: 8px;
}


.category-image:hover {
  filter: brightness(110%);
}

@media (max-width: 600px) {
  .category-image {
    width: 100px;
    height: 100px;
  }

}
</style>
