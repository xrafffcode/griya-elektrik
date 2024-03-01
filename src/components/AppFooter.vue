<script setup>
import { useBranchStore } from '@/stores/branch'
import { ref } from 'vue'

const { branches, loading } = storeToRefs(useBranchStore())
const { fetchBranches } = useBranchStore()

fetchBranches()

const tab = ref(1)
</script>

<template>
  <footer>
    <VContainer>
      <VRow class="py-5">
        <VCol
          cols="12"
          md="5"
          lg="4"
        >
          <div class="footer-tabs">
            <div
              class="tabs-wrapper"
            >
              <div
                v-for="branch in branches"
                :key="branch.sort"
                class="tab"
              >
                <div
                  class="tab-title"
                  :class="{ active: tab === branch.sort }"
                  @click="tab = branch.sort"
                >
                  {{ branch.name }}
                </div>
              </div>
            </div>
           

            <div class="tab-content">
              <div
                v-for="branch in branches"
                v-show="tab === branch.sort"
                :key="branch.sort"
              >
                <h6 class="tab-heading">
                  {{ branch.name }}
                </h6>
                <p class="text-p">
                  {{ branch.address }}
                  <br>
                  <a
                    :href="branch.map"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-p"
                  >Buka di Google Maps</a>
                </p>
                <h6 class="tab-heading mt-5">
                  Kontak
                </h6>
                <p class="text-p">
                  <VIcon class="mr-2">
                    mdi-phone
                  </VIcon>
                  <span class="text-p">{{ branch.phone }}</span>
                </p>
              </div>
            </div>
          </div>
        </VCol>


        <VCol
          cols="12"
          md="2"
          lg="3"
        >
          <div class="text-p ">
            <h2 class="font-weight-bold mb-3">
              Tautan
            </h2>
            <ul class="list-unstyled">
              <li>
                <RouterLink
                  to="/"
                  class="text-p text-decoration-none"
                >
                  Home
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/produk"
                  class="text-p text-decoration-none"
                >
                  Produk
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/kontak-kami"
                  class="text-p text-decoration-none"
                >
                  Kontak Kami
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/tentang-kami"
                  class="text-p text-decoration-none"
                >
                  Tentang
                  Kami
                </RouterLink>
              </li>
            </ul>
          </div>
        </VCol>
        <VCol
          cols="12"
          md="2"
          lg="3"
        >
          <div class="text-p ">
            <h2 class="font-weight-bold mb-3">
              Ikuti Kami
            </h2>
            <ul class="list-unstyled">
              <li>
                <a
                  href="https://www.instagram.com/griya_electric.15"
                  class="text-p text-decoration-none"
                  target="_blank" rel="noopener noreferrer"
                >Instagram</a>
              </li>
             
              <li>
                <a
                  href="https://shopee.co.id/griyalimabelas"
                  class="text-p text-decoration-none"
                  target="_blank" rel="noopener noreferrer"
                >Shoppe</a>
              </li>
            </ul>
          </div>
        </VCol>

        <VCol
          cols="12"
          md="2"
          lg="2"
        >
          <div class="text-p ">
            <h2 class="font-weight-bold mb-3">
              Lainnya
            </h2>
            <ul class="list-unstyled">
              <li>
                <RouterLink
                  to="/syarat-dan-ketentuan"
                  class="text-p text-decoration-none"
                >
                  Syarat dan
                  Ketentuan
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/kebijakan-privasi"
                  class="text-p text-decoration-none"
                >
                  Kebijakan
                  Privasi
                </RouterLink>
              </li>
            </ul>
          </div>
        </VCol>
      </VRow>
      <div class="text-center mt-5">
        <p class="text-p">
          © 2023 Griya 15. All rights reserved.
        </p>
      </div>
    </VContainer>
  </footer>
</template>

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

.footer-tabs .tabs-wrapper {
  display: flex;
  overflow-x: auto; /* Menambahkan scrollbar horizontal */
  margin-bottom: 1rem;
  -webkit-overflow-scrolling: touch; /* Menambahkan efek scrolling pada iOS */
}

.footer-tabs .tabs-wrapper::-webkit-scrollbar {
  width: 6px; 
  height: 6px;
}

.footer-tabs .tabs-wrapper::-webkit-scrollbar-thumb {
  background-color: #273E86;
  border-radius: 10px;
}

.footer-tabs .tabs-wrapper::-webkit-scrollbar-track {
  background-color: #EEEEEE;
}
</style>
