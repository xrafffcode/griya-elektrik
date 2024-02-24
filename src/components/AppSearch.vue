<script setup>
import { ref } from 'vue'

  
const search = ref('')
const searchResults = ref([])

const products = [
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
]

const clearSearch = () => {
  search.value = ''
}

const handleSearch = () => {
  if (search.value === '') {
    searchResults.value = []
    
    return
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.value.toLowerCase()),
  )

  searchResults.value = filteredProducts
}

const highlightText = text => {
  const searchRegex = new RegExp(search.value, 'gi')
  
  return text.replace(searchRegex, match => `<b>${match}</b>`)
}

watch(search, handleSearch)
</script>


<template>
  <VTextField
    v-model="search"
    variant="outlined"
    append-inner-icon="mdi-magnify"
    placeholder="Cari Produk di sini"
    class="search"
    @click:append="clearSearch"
  />

  <div
    v-if="searchResults.length > 0"
    class="search-results"
  >
    <ul>
      <li
        v-for="(result, index) in searchResults"
        :key="index"
      >
        <span v-html="highlightText(result.name)" />
      </li>
    </ul>
  </div>
</template>



<style scoped>
.search .v-input__control {
    border-radius: 10px;
    background-color: #FAFAFA;
}

.search .v-field__outline .v-field__outline__start,
.search .v-field__outline .v-field__outline__end {
    border: none !important;
}

.search-results {
    border: 1px solid #ccc;
    border-top: none;
    max-height: 200px;
    overflow-y: auto;
}

.search-results ul {
    list-style-type: none;
    padding: 0;
}

.search-results ul li {
    padding: 10px;
    cursor: pointer;
}

.search-results ul li:hover {
    background-color: #f4f4f4;
}
</style>
