<template>
    <div class="py-5">
        <div class="d-flex justify-space-between align-center ">
            <h1 class="text-h6 font-weight-bold ">Kategori</h1>
            <RouterLink to="/kategori" class="primary text-p text-decoration-none">Lihat Semua</RouterLink>
        </div>

        <v-row class="mt-3">
            <v-col v-for="category in categories" :key="category.id" sm="4" md="3" lg="2">
                <div class="d-flex flex-column align-center category">
                    <img :src="category.url" alt="category.name" class="category-image">
                    <p class="text-center mt-3">{{ category.name }}</p>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';


export default {
    name: 'AppCategories',
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: 'Lampu',
                    url: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
                },
                {
                    id: 2,
                    name: 'Keramik',
                    url: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 3,
                    name: 'Pintu',
                    url: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
                },
                {
                    id: 4,
                    name: 'Kursi',
                    url: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
                },
                {
                    id: 5,
                    name: 'Meja',
                    url: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'
                },
                {
                    id: 6,
                    name: 'Kamar Mandi',
                    url: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
                },
                {
                    id: 7,
                    name: 'Kamar Tidur',
                    url: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
                },
                {
                    id: 8,
                    name: 'Dapur',
                    url: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
                }
            ]
        };
    },
    components: { RouterLink }
}
</script>

<style scoped>
.category {
    cursor: pointer;
}

.category-image {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #273E86;
}
</style>