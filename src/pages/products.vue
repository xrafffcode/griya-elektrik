<script setup>
import CategoryItem from '@/components/AppCategoryItem.vue'
import AppProductCard from '@/components/AppProductCard.vue'
import AppSearch from '@/components/AppSearch.vue'
import { onMounted, ref } from 'vue'

import { useProductCategoryStore } from '@/stores/productCategory'
import { storeToRefs } from 'pinia'

const { categories, loading, error } = storeToRefs(useProductCategoryStore())
const { fetchRootCategories } = useProductCategoryStore()

fetchRootCategories()

const search = ref('')
const searchResults = ref([])

const products = ref([
  {
    id: 1,
    name: 'Lampu',
    price: 200000,
    url: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
  },
  {
    id: 2,
    name: 'Keramik',
    price: 300000,
    url: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
  },
  {
    id: 3,
    name: 'Kamera',
    price: 500000,
    url: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
  },
  {
    id: 4,
    name: 'Sepatu',
    price: 100000,
    url: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
  },
])

const filteredProducts = ref([])
const sort = ref([])

const isCategoryShown = ref(false)


onMounted(() => {
  document.title = 'Produk'
})
</script>

<template>
  <VContainer class="py-5">
    <VRow>
      <VCol cols="9">
        <AppSearch />
      </VCol>
      <VCol cols="3">
        <VSelect
          v-model="sort"
          :items="['Terbaru', 'Harga Tertinggi', 'Harga Terendah']"
          label="Urutkan"
          variant="outlined"
          clearable
        />
      </VCol>
    </VRow>

    <VRow class="mt-5">
      <VCol
        cols="12"
        md="3"
      >
        <h3>Kategori Produk</h3>

        <ul
          v-if="!loading"
          class="list-unstyled mt-3"
        >
          <CategoryItem
            v-for="category in categories"
            :key="category.id"
            :category="category"
          />
        </ul>

        <VProgressLinear
          v-if="loading"
          indeterminate
          color="primary"
        />
      </VCol>


      <VCol
        cols="12"
        md="9"
      >
        <VRow>
          <VCol
            v-for="product in products"
            :key="product.id"
            cols="6"
            sm="6"
            md="4"
            lg="4"
          >
            <AppProductCard :product="product" />
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VContainer>
</template>


<style scoped>
.card-categories {
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
}

.card-categories h3 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
}

.card-categories ul {
    padding-left: 0;
}
</style>
