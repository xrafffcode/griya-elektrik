<template>
    <swiper :pagination="pagination" :modules="modules" class="mySwiper">
        <swiper-slide v-for="slide in slides" :key="slide.id">
            <img :src="slide.url" alt="slide.alt" />
        </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import banner from '@/assets/images/banner.jpg';


export default {
    components: {
        Swiper, SwiperSlide
    },
    data() {
        return {
            modules: [Pagination],
            slides: [
                {
                    id: 1,
                    url: banner,
                    alt: 'Slide 1'
                },
                {
                    id: 2,
                    url: banner,
                    alt: 'Slide 2'
                },
                {
                    id: 3,
                    url: banner,
                    alt: 'Slide 3'
                }
            ]
        }
    },
    setup() {
        return {
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + " " + "</span>";
                },
            },
        }
    }
}
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

@media (min-width: 600px) {
    .swiper {
        height: 400px;
    }

    .swiper-slide img {
        height: 400px;
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