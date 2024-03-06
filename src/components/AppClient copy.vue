<script setup>
import { ref, onMounted } from 'vue'
import { useClientStore } from '@/stores/client';
import { storeToRefs } from 'pinia'

const { clients } = storeToRefs(useClientStore())
const { fetchClients } = useClientStore()


fetchClients()
</script>



<template>
  <div class="py-5">
    <div class="client-container">
      <div class="client">
        <div class="client__title">
          <h3>
            Yang telah mempercayai kami
          </h3>
        </div>
        <div class="client__content">
          <a class="client__content__item" v-for="client in clients" :key="client.id"  :href="client.url" target="_blank">
            <img :src="client.logo_url" :alt="client.name" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.client-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.client {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.client__title {
  margin-bottom: 20px;
}

.client__content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.client__content__item {
  margin: 10px;
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  transition: 0.3s;
  cursor: pointer;
  animation: marquee 4s linear infinite;
}

.client__content__item:hover {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.client__content__item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .client__content__item {
    width: 80px;
    height: 80px;
  }
}


@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

</style>
