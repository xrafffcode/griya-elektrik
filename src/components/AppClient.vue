<template>
  <div class="py-5">
    <h3 class="text-center">
      Yang telah mempercayai kami
    </h3>
    <div class="logo-slider">
      <!-- Tampilkan gambar klien dari array clients yang memiliki logo_url -->
      <div class="logos-slide" ref="logosSlide">
        <a v-for="client in clients" :key="client.id" :href="client.url">
          <img v-if="client.logo_url" :src="client.logo_url" :alt="client.name" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useClientStore } from '@/stores/client';
import { storeToRefs } from 'pinia'

const { clients } = storeToRefs(useClientStore())
const { fetchClients } = useClientStore()



const cloneLogos = () => {
  const originalLogosSlide = document.querySelector(".logos-slide");
  const copy = originalLogosSlide.cloneNode(true);
  document.querySelector(".logo-slider").appendChild(copy);
}

onMounted(async () => {
  await fetchClients();
  cloneLogos();
});
</script>

<style>
.logo-slider {
    overflow: hidden;
    padding: 30px 0 0 0;
    white-space: nowrap;
    position: relative;
}

.logo-slider:hover .logos-slide {
    animation-play-state: paused;
}

.logos-slide {
    display: inline-block;
    animation: 45s slide infinite linear;
}

.logos-slide img {
    width: 183px;
    height: 83px;
    margin: 0 40px;
    object-fit: contain;
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
