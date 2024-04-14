<script setup>
import CategoryItem from '@/components/AppCategoryItem.vue'
import AppProductCard from '@/components/AppProductCard.vue'
import AppSearch from '@/components/AppSearch.vue'
import { onMounted, ref } from 'vue'
import { debounce } from 'lodash'
import { useRoute } from 'vue-router'

const route = useRoute()


import { useProductCategoryStore } from '@/stores/productCategory'
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'

const { categories, loading, error } = storeToRefs(useProductCategoryStore())
const { fetchRootCategories } = useProductCategoryStore()

const { products } = storeToRefs(useProductStore())
const { fetchActiveProducts, fetchProductsWithParams } = useProductStore()

fetchRootCategories()

const search = ref('')
const sort = ref([])

onMounted(() => {
  document.title = 'Produk'

  checkQueryParams()
})

watch(sort, async value => {
  fetchProductsWithParams({ sort: value, search: search.value })
})


const debouncedFetchProductsWithParams = debounce(fetchProductsWithParams, 500)

watch(search, async value => {
  debouncedFetchProductsWithParams({ search: value, sort: sort.value })
})

const checkQueryParams = () => {
  if (route.query.category || route.query.brand) {
    fetchProductsWithParams({ search: search.value, sort: sort.value, categorySlug: route.query.category, brandSlug: route.query.brand })
  }else {
    fetchActiveProducts()
  }
}

watch(() => route.query, () => {
  checkQueryParams()
})
</script>

<template>
  <VContainer class="py-5">
    <VRow>
      <VCol 
        cols="12"
        sm="12"
        md="9"
      >
        <VTextField
          v-model="search"
          variant="outlined"
          append-inner-icon="mdi-magnify"
          placeholder="Cari Produk di sini"
          class="search"
          clearable
        />
      </VCol>
      <VCol
        cols="12"
        sm="12"
        md="3"
      >
        <VSelect
          v-model="sort"
          :items="[
            { text: 'Terbaru', value: 'latest' },
            { text: 'Terlama', value: 'oldest'},
            { text: 'Termurah', value: 'price_asc' },
            { text: 'Termahal', value: 'price_desc' }
          ]"
          label="Urutkan"
          variant="outlined"
          clearable
          item-title="text"
          item-value="value"
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
            lg="3"
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
