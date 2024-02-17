<template>
    <v-text-field v-model="search" variant="outlined" @click:append="clearSearch" append-inner-icon="mdi-magnify"
        placeholder="Cari Produk di sini" class="search"></v-text-field>

    <div v-if="searchResults.length > 0" class="search-results">
        <ul>
            <li v-for="(result, index) in searchResults" :key="index">
                <span v-html="highlightText(result.name)"></span>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'AppSearch',
    data() {
        return {
            search: '',
            searchResults: [],
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
                },
                {
                    id: 3,
                    name: 'Kamera',
                    price: 500000,
                    url: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'
                },
                {
                    id: 4,
                    name: 'Sepatu',
                    price: 100000,
                    url: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'
                }
            ]
        };
    },
    methods: {
        clearSearch() {
            this.search = ''; // Membersihkan input pencarian saat ikon diklik
        },
        handleSearch() {
            if (this.search === '') {
                this.searchResults = [];
                return;
            }


            const filteredProducts = this.products.filter(product =>
                product.name.toLowerCase().includes(this.search.toLowerCase())
            );
            this.searchResults = filteredProducts;
        },
        highlightText(text) {
            const searchRegex = new RegExp(this.search, 'gi');
            return text.replace(searchRegex, match => `<b>${match}</b>`);
        }
    },
    watch: {
        search() {
            this.handleSearch();
        }
    }
}
</script>

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
