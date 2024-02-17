<template>
    <footer>
        <v-container>
            <v-row class="py-5">
                <v-col cols="12" md="5" lg="4">
                    <div class="footer-tabs">
                        <div class="tabs-wrapper">
                            <div class="tab-title" :class="{ active: tab === 1 }" @click="tab = 1">
                                Purwokerto
                            </div>
                            <div class="tab-title" :class="{ active: tab === 2 }" @click="tab = 2">
                                Purbalinga
                            </div>
                        </div>
                        <div class="tab-content">
                            <div v-if="tab === 1">
                                <h6 class="tab-heading">
                                    Toko Cabang Purwokerto
                                </h6>
                                <p class="text-p">
                                    Komplek Pertokoan Kebon Dalem Blok A-17 dan A-18 <br> Purwokerto, Jawa Tengah, 53114.
                                    <br>
                                    <a href="https://maps.app.goo.gl/Z54FMmfyQf6DkXEKA" target="_blank" class="text-p">Buka
                                        di
                                        Google Maps</a>
                                </p>
                                <h6 class="tab-heading mt-5">
                                    Kontak
                                </h6>
                                <p class="text-p">
                                    <v-icon class="mr-2">mdi-phone</v-icon>
                                    <span class="text-p">0812 8434 5301</span>
                                </p>

                            </div>
                            <div v-else-if="tab === 2">
                                <h6 class="tab-heading">
                                    Toko Cabang Purbalingga
                                </h6>
                                <p class="text-p">
                                    Jl. Ahmad Yani No. 86 ( Depan Taman Makam Pahlawan ), Purbalingga, Jawa Tengah
                                    <br>
                                    <a href="https://maps.app.goo.gl/3Z3Z9Z3Z9Z3Z9Z3Z9" target="_blank" class="text-p">Buka
                                        di
                                        Google Maps</a>
                                </p>
                                <h6 class="tab-heading mt-5">
                                    Kontak
                                </h6>
                                <p class="text-p">
                                    <v-icon class="mr-2">mdi-phone</v-icon>
                                    <span class="text-p">0812 8434 5301</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </v-col>


                <v-col cols="12" md="2" lg="3">
                    <div class="text-p ">
                        <h2 class="font-weight-bold mb-3">Tautan</h2>
                        <ul class="list-unstyled">
                            <li>
                                <router-link to="/" class="text-p text-decoration-none">Home</router-link>
                            </li>
                            <li>
                                <router-link to="/produk" class="text-p text-decoration-none">Produk</router-link>
                            </li>
                            <li>
                                <router-link to="/kontak-kami" class="text-p text-decoration-none">Kontak Kami</router-link>
                            </li>
                            <li>
                                <router-link to="/tentang-kami" class="text-p text-decoration-none">Tentang
                                    Kami</router-link>
                            </li>
                        </ul>
                    </div>

                </v-col>
                <v-col cols="12" md="2" lg="3">
                    <div class="text-p ">
                        <h2 class="font-weight-bold mb-3">Ikuti Kami</h2>
                        <ul class="list-unstyled">
                            <li>
                                <a href="https://www.facebook.com/griya15purwokerto"
                                    class="text-p text-decoration-none">Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/griya15purwokerto"
                                    class="text-p text-decoration-none">Instagram</a>
                            </li>
                            <li>
                                <a href="https://www.tokopedia.com/griya15"
                                    class="text-p text-decoration-none">Tokopedia</a>
                            </li>
                            <li>
                                <a href="https://www.bukalapak.com/u/griya15"
                                    class="text-p text-decoration-none">Bukalapak</a>
                            </li>
                        </ul>
                    </div>
                </v-col>

                <v-col cols="12" md="2" lg="2">
                    <div class="text-p ">
                        <h2 class="font-weight-bold mb-3">Lainnya</h2>
                        <ul class="list-unstyled">
                            <li>
                                <router-link to="/syarat-dan-ketentuan" class="text-p text-decoration-none">Syarat dan
                                    Ketentuan</router-link>
                            </li>
                            <li>
                                <router-link to="/kebijakan-privasi" class="text-p text-decoration-none">Kebijakan
                                    Privasi</router-link>
                            </li>
                        </ul>
                    </div>
                </v-col>
            </v-row>
            <div class="text-center mt-5">
                <p class="text-p">© 2023 Griya 15. All rights reserved.</p>
            </div>
        </v-container>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            tab: 1
        }
    }
}
</script>

<style>
footer {
    background-color: #f8f8f8;
    margin-top: 2rem;
}

.footer-tabs {
    display: flex;
    flex-direction: column;
    background-color: #ffff;
    background-color: #FFFFFF;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: #EEEEEE;
    border-radius: 10px 10px 10px 10px;
}

.tabs-wrapper {
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-around;
}

.tab-title {
    position: relative;
    padding: 20px 25px;
    font-weight: 700;
    line-height: 1;
    border: solid transparent;
    border-width: 0 0 2px 0;
    cursor: pointer;
}

.tab-title.active {
    border-color: #EEEEEE;
    color: #273E86 !important;
}

.tab-content {
    padding: 0 25px 25px 25px;
}

.tab-heading {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.text-p {
    font-size: 14px;
    color: #333333;
}

.list-unstyled {
    padding-left: 0;
    list-style: none;
}

.list-unstyled li {
    margin-bottom: 0.5rem;
}

.list-unstyled li a {
    color: #333333;
}

.list-unstyled li a:hover {
    color: #273E86;
}

@media (min-width: 960px) {
    .footer-tabs {
        margin-right: 3rem;

    }
}
</style>