<template>
  <VCard class="product-card">
    <img
      :src="product.url"
      alt="product.name"
      class="product-image"
    >
    <VCardText>
      <h3>{{ product.name }}</h3>
      <p class="primary">
        {{ product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}
      </p>
    </VCardText>
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

<style>
.product-card {
    background-color: #FAFAFA;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
    padding: 1rem;
}

.product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
}

.product-card .v-card-text {
    padding: 0;
    padding-left: 10px;
    margin-top: 10px;
}

@media (max-width: 600px) {
    .product-image {
        height: 125px;
    }
}
</style>
