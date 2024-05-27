<template>
  <VCard class="product-card" @click="goToProductPage">
    <VImg aspect-ratio="1/1" cover :src="product.thumbnail_url" />
    <div v-if="product.is_featured" class="css-1ej6h55" aria-label="campaign">
      Produk Unggulan
    </div>
    <div class="product-card__content mt-2">
      <h4 class="product-title mb-0">
        {{ product.name }}
      </h4>
      <p class="primary">
        {{ formattedPrice }}
      </p>
    </div>
  </VCard>
</template>

<script>
import product from '@/pages/product.vue'
import { VImg } from 'vuetify/lib/components/index.mjs'

export default {
  name: 'AppProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedPrice() {
      return this.product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).replace(/,00$/, "")
    },
  },
  methods: {
    goToProductPage() {
      this.$router.push(`/produk/${this.product.slug}`)
    },
  },
}
</script>

<style scoped>
.product-card {
  background-color: #FAFAFA;
  min-height: 310px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 4px;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 1rem;
}

.product-card__content {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding-left: 10px;
  padding-right: 10px;
}

.product-title {
  font-size: 0.86rem;
  line-height: 1.5;
  max-width: 100%;
  max-height: 100%;
  white-space: pre-wrap;
  word-break: keep-all;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 4px;
  min-height: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 500;
}

.primary {
  margin: 0;
}

@media (max-width: 600px) {
  .product-image {
    height: 100px !important;
  }

  .product-card {
    min-height: 260px !important;
  }

  .product-title {
    font-size: .9rem;

  }

}

.css-1ej6h55 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  line-height: 14px;
  font-weight: 600;
  font-size: 0.714286rem;
  color: rgb(255, 255, 255);
  height: 20px;
  padding: 2px 20px 2px 8px;
  border-radius: 6px 0px 10px 0px;
  background-color: #EA5925;
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
