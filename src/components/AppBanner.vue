<template>
  <Swiper
    :pagination="pagination"
    :modules="modules"
    class="mySwiper"
  >
    <SwiperSlide
      v-for="banner in banners"
      :key="banner.id"
    >
      <img
        :src="banner.image_url"
        :alt="
          banner.alt"
      >
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { useBannerStore } from '@/stores/banner'
import { storeToRefs } from 'pinia'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const { banners, loading, error, success } = storeToRefs(useBannerStore())
const { fetchBanners, deleteBanner } = useBannerStore()

fetchBanners()

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + " " + "</span>"
  },
}

const modules = [Pagination]
</script>

<style>
.swiper {
  width: 100%;
  height: 150px;
  border-radius: 10px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: 150px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
}

@media (min-width: 768px) {
  .swiper {
    height: 400px;
  }

  .swiper-slide img {
    height: 400px;
  }
}

@media (max-width: 768px ) and (min-width: 480px) {
  .swiper {
    height: 250px;
  }

  .swiper-slide img {
    height: 250px;
  }
}

.swiper-pagination-bullet {
  background-color: #273E86;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: .2;
}

.swiper-pagination-bullet-active {
  width: 20px;
  height: 10px;
  border-radius: 10px;
  opacity: 1;
}
</style>
