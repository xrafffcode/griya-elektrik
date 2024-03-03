<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'

  
const search = ref('')

const { products } = storeToRefs(useProductStore())

const filterProducts = ref([])

watch(search, async value => {
  if (value.length > 0) {
    filterProducts.value = products.value.filter(product => {
      return product.name.toLowerCase().includes(value.toLowerCase())
    })
  } else {
    filterProducts.value = []
  }
})

function boldSameText(text, search) {
  const regex = new RegExp(search, 'gi')

  return text.replace(regex, match => `<b>${match}</b>`)
}
</script>


<template>
  <VTextField
    v-model="search"
    variant="outlined"
    append-inner-icon="mdi-magnify"
    placeholder="Cari Produk di sini"
    class="search"
    clearable
  />

  <div
    v-if="filterProducts.length > 0"
    class="search-results"
  >
    <ul>
      <li
        v-for="product in filterProducts"
        :key="product.id"
      >
        <p @click="() => $router.push(`/produk/${product.slug}`)" class="mb-0">
          <span v-html="boldSameText(product.name, search)" />
        </p>
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
