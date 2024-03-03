<template>
  <VCard
    class="product-card"
    @click="() => $router.push(`/produk/${product.slug}`)"
  >
    <img
      :src="product.thumbnail_url"
      alt="product.name"
      class="product-image"
    >
    <div class="product-card__content">
      <h4 class="product-title">
        {{ product.name }}
      </h4>
      <p class="primary">
        {{ product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}
      </p>
    </div>
  </VCard>
</template>

<script>
export default {
  name: 'AppProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.product-card {
    background-color: #FAFAFA  !important;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.1) !important;
    padding: 1rem;
    min-height: 390px !important;
}

.product-image {
    width: 100% !important;
    height: 250px !important;
    object-fit: cover;
    border-radius: 10px !important;
}

.product-card .v-card-text {
    padding: 0;
    padding-left: 10px;
    margin-top: 10px;
}

.product-title {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
}

.product-card__content {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding-left: 10px;
    padding-right: 10px;
}

@media (max-width: 600px) {
    .product-image {
        height: 125px !important;
    }

    .product-card {
        min-height: 240px !important;
    }

    .product-title {
        font-size: .9rem;
        word-break: break-word;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
