<template>
  <VContainer class="d-none d-md-block mt-5">
    <Swiper
      :pagination="pagination"
      :modules="modules"
      navigation
      class="mySwiper"
    >
      <SwiperSlide
        v-for="banner in banners"
        :key="banner.id"
      >
        <img
          :src="banner.desktop_image_url"
          :alt="
            banner.alt"
        >
      </SwiperSlide>
    </Swiper>
  </VContainer>

  <VContainer class="d-block d-sm-block d-md-none mt-5">
    <Swiper
      :pagination="pagination"
      :modules="modules"
      navigation
      class="mySwiper"
    >
      <SwiperSlide
        v-for="banner in banners"
        :key="banner.id"
      >
        <img
          :src="banner.mobile_image_url"
          :alt="
            banner.alt"
        >
      </SwiperSlide>
    </Swiper>
  </VContainer>
</template>

<script setup>
import { useBannerStore } from '@/stores/banner'
import { storeToRefs } from 'pinia'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
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


const modules = [Pagination, Navigation]
</script>

<style>
.swiper {
  width: 100%;
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
  object-fit: cover;
}

@media (min-width: 0px) and (max-width: 991px) {
  .swiper {
    width: 100%;
    height: 170px;
    border-radius: 0px !important;

  }

  .swiper-slide img {
    width: 100%;
    height: 170px;
    border-radius: 0px;
  }
}

@media (min-width: 768px) and (max-width: 1280px) {
  .swiper {
    height: 220px;
  }

  .swiper-slide img {
    height: 220px;
  }
  
}


@media (min-width: 1280px) and (max-width: 1919px) {
  .swiper {
    min-height: 400px;
    width: 100%;
  }

  .swiper-slide img {
    min-height: 400px ;
    width: 100%;
    object-fit: contain;
  }
}

.swiper-pagination-bullet {
  background-color: #EA5925;
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

.swiper-pagination {
  bottom: 0px;
}

.swiper-button-next, .swiper-button-prev {
 background-color: #fff;
  color: #273E86;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  margin-bottom: -20px;
  z-index: 10;
  opacity: 1;
  transition: 0.3s;
}

.swiper-button-next:after, .swiper-button-prev:after {
  font-size: 1rem;
}
</style>
