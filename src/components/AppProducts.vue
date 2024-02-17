<template>
    <div class="py-5">
        <div class="d-flex justify-space-between align-center ">
            <h1 class="text-h6 font-weight-bold">
                Produk Terbaru
            </h1>
            <RouterLink to="/produk" class="primary text-p text-decoration-none">Lihat Semua</RouterLink>
        </div>

        <v-row class="mt-3">
            <v-col v-for="product in products" :key="product.id" cols="6" sm="6" md="4" lg="3">
                <AppProductCard :product="product" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import AppProductCard from '@/components/AppProductCard.vue';

export default {
    name: 'AppProducts',
    components: {
        AppProductCard
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Lampu',
                    price: 200000,
                    url: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
                },
                {
                    id: 2,
                    name: 'Keramik',
                    price: 300000,
                    url: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                }

            ]
        }
    }
}
</script>