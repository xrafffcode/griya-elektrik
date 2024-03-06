<template>
  <div class="py-5">
    <div class="brand-slider">
      <div class="brands-slide" ref="brandsSlide">
        <a v-for="brand in brands" :key="brand.id" @click="goToBrand(brand.id)">
          <img v-if="brand.logo_url" :src="brand.logo_url" :alt="brand.name" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useProductBrandStore } from '@/stores/productBrand';
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()

const { brands } = storeToRefs(useProductBrandStore())
const { fetchBrands } = useProductBrandStore()


const cloneBrands = () => {
  const originalBrandsSlide = document.querySelector(".brands-slide");
  const copy = originalBrandsSlide.cloneNode(true);
  document.querySelector(".brand-slider").appendChild(copy);
}

onMounted(async () => {
  await fetchBrands();
  cloneBrands();
});

const goToBrand = (id) => {
  router.push({ name: 'products', query: { brand: id } })
}
</script>

<style>
.brand-slider {
    overflow: hidden;
    padding: 30px 0 0 0;
    white-space: nowrap;
    position: relative;
}

.brand-slider:hover .brands-slide {
    animation-play-state: paused;
}

.brands-slide {
    display: inline-block;
    animation: 45s slide infinite linear;
}

.brands-slide img {
    width: 183px;
    height: 83px;
    margin: 0 40px;
    object-fit: contain;
}

.brands-slide img:hover {
    cursor: pointer;
}

@keyframes slide {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}
</style>
