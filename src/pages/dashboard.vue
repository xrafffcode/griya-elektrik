<template>
  <div>
    <h1>Dashboard</h1>

    <VRow class="mt-3">
      <VCol sm="12" md="6" lg="3">
        <VCard>
          <VCardTitle>
            Total Produk
          </VCardTitle>
          <VCardText>
            {{ products.length }}
          </VCardText>
        </VCard>
      </VCol>

      <VCol sm="12" md="6" lg="3">
        <VCard>
          <VCardTitle>
            Total Kategori
          </VCardTitle>
          <VCardText>
            {{ categories.length }}
          </VCardText>
        </VCard>
      </VCol>

      <VCol sm="12" md="6" lg="3">
        <VCard>
          <VCardTitle>
            Total Cabang
          </VCardTitle>
          <VCardText>
            {{ branches.length }}
          </VCardText>
        </VCard>
      </VCol>

      <VCol sm="12" md="6" lg="3">
        <VCard>
          <VCardTitle>
            Total Merk
          </VCardTitle>
          <VCardText>
            {{ brands.length }}
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/product'
import { useProductCategoryStore } from '@/stores/productCategory'
import { useBranchStore } from '@/stores/branch'
import { useProductBrandStore } from '@/stores/productBrand'

const { products } = storeToRefs(useProductStore())
const { fetchProducts } = useProductStore()

const { categories } = storeToRefs(useProductCategoryStore())
const { fetchCategories } = useProductCategoryStore()

const { branches } = storeToRefs(useBranchStore())
const { fetchBranches } = useBranchStore()

const { brands } = storeToRefs(useProductBrandStore())
const { fetchBrands } = useProductBrandStore()

fetchProducts()
fetchCategories()
fetchBranches()
fetchBrands()
</script>
