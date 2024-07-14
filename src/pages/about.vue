<template>
  <VContainer class="mt-5">
    <div class="about d-flex align-center justify-space-between py-5">
      <img
        :src="first_image"
        alt="griya"
        class="about-img"
      >
      <div class="ml-5">
        <h1 class="text-h6 font-weight-bold mb-3">
          Tentang Kami
        </h1>
        <p class="text-p mb-2">
          Griya 15 hadir sejak tahun 2017 dengan melayani hampir ribuan customer dan siap memenuhi semua kebutuhan lampu hias untuk mempercantik ruangan rumah, kantor, bangunan dan taman Anda.
        </p>
        <p class="text-p mb-2">
          Setelah berjalan beberapa tahun kami memiliki misi untuk Menjadi tempat pilihan berbelanja Lampu Hias, Alat Listrik, Elektronik dan Aksesoris Rumah dengan konsep terbesar, termurah, terlengkap dan terpercaya dalam mempercantik ruangan rumah, kantor, bangunan dan taman.
        </p>
        <p class="text-p mb-2">
          Berlokasi di Purwokerto tepatnya di Komplek Pertokoan Kebon Dalem Blok A-17 dan A-18 Purwokerto Jawa Tengah.
        </p>
        <p class="text-p mb-2">
          Saat ini Griya 15 telah hadir di berbagai lokasi seperti di Purbalingga, dan akan segera hadir di lokasi lainnya. Jangan lewatkan kesempatan untuk berbelanja Lampu Hias murah dan berkualitas di Griya 15, Kami yakin Anda akan menemukan penawaran harga terbaik di sini!
        </p>
      </div>
    </div>

    <div class="py-5">
      <h1 class="text-center">
        Temukan Keistimewaan dari Pelayanan Kami
      </h1>
      <p class="text-center text-p mb-5">
        Griya 15 hadir dengan berbagai keistimewaan yang tidak akan Anda temukan di tempat lain. Berikut adalah
        keistimewaan yang kami tawarkan:
      </p>

      <VRow class="mt-5">
        <VCol
          cols="12"
          md="4"
        >
          <VCard
            class="pa-5"
            elevation="0"
          >
            <div class="text-center">
              <VIcon
                size="50"
                class="mb-3"
              >
                mdi-shield-check
              </VIcon>
              <h2 class="text-h6 font-weight-bold mb-3 text-primary">
                Terpercaya
              </h2>
              <p class="text-p">
                Kami telah melayani ribuan pelanggan dan terbukti memberikan pelayanan terbaik
                kepada pelanggan.
              </p>
            </div>
          </VCard>
        </VCol>

        <VCol
          cols="12"
          md="4"
        >
          <VCard
            class="pa-5"
            elevation="0"
          >
            <div class="text-center">
              <VIcon
                size="50"
                class="mb-3"
              >
                mdi-cash
              </VIcon>
              <h2 class="text-h6 font-weight-bold mb-3 text-primary">
                Harga Terbaik
              </h2>
              <p class="text-p">
                Kami menawarkan harga terbaik untuk semua produk yang kami jual.
              </p>
            </div>
          </VCard>
        </VCol>

        <VCol
          cols="12"
          md="4"
        >
          <VCard
            class="pa-5"
            elevation="0"
          >
            <div class="text-center">
              <VIcon
                size="50"
                class="mb-3"
              >
                mdi-lightbulb-on
              </VIcon>
              <h2 class="text-h6 font-weight-bold mb-3 text-primary">
                Pilihan Lengkap
              </h2>
              <p class="text-p">
                Kami memiliki pilihan lengkap untuk semua kebutuhan lampu hias Anda.
              </p>
            </div>
          </VCard>
        </VCol>



        <VCol
          cols="12"
          md="4"
        >
          <VCard
            class="pa-5"
            elevation="0"
          >
            <div class="text-center">
              <VIcon
                size="50"
                class="mb-3"
              >
                mdi-cog-outline
              </VIcon>
              <h2 class="text-h6 font-weight-bold mb-3 text-primary">
                Kualitas Terbaik
              </h2>
              <p class="text-p">
                Kami hanya menjual produk dengan kualitas terbaik untuk kepuasan pelanggan.
              </p>
            </div>
          </VCard>
        </VCol>


        <VCol
          cols="12"
          md="4"
        >
          <VCard
            class="pa-5"
            elevation="0"
          >
            <div class="text-center">
              <VIcon
                size="50"
                class="mb-3"
              >
                mdi-headset
              </VIcon>
              <h2 class="text-h6 font-weight-bold mb-3 text-primary">
                Pelayanan Terbaik
              </h2>
              <p class="text-p">
                Kami siap memberikan pelayanan terbaik kepada pelanggan kapanpun dan
                dimanapun.
              </p>
            </div>
          </VCard>
        </VCol>


        <VCol
          cols="12"
          md="4"
        >
          <VCard
            class="pa-5"
            elevation="0"
          >
            <div class="text-center">
              <VIcon
                size="50"
                class="mb-3"
              >
                mdi-certificate-outline
              </VIcon>
              <h2 class="text-h6 font-weight-bold mb-3 text-primary">
                Garansi Produk
              </h2>
              <p class="text-p">
                Kami memberikan garansi produk untuk kepuasan pelanggan.
              </p>
            </div>
          </VCard>
        </VCol>
      </VRow>
    </div>

    <AppTestimonial class="mt-5" />

    <iframe
      v-if="iframe_map"
      :src="iframe_map"
      width="100%"
      height="500"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      class="google-map"
    />
  </VContainer>
</template>

<script setup>
import AppTestimonial from '@/components/AppTestimonial.vue'
import { onMounted, ref } from 'vue'
import { useBranchStore } from '@/stores/branch'


const { fetchMainBranch } = useBranchStore()

const iframe_map = ref('')
const first_image = ref('')

const fetchMainBranchData = async () => {
  try {
    const branch = await fetchMainBranch()

    iframe_map.value = branch.iframe_map
    first_image.value = branch.branch_images[0].image_url
  } catch (error) {
    console.error('Error fetching main branch data:', error)
  }
}


onMounted(() => {
  document.title = 'Tentang Kami'

  fetchMainBranchData()
})
</script>

<style scoped>
.google-map {
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about-img {
    width: 150%;
    border-radius: 8px;
    box-shadow: -8px -8px 0px 0px #273E86;
    height: 500px;
    object-fit: cover;
}

@media (max-width: 768px) {
    .about-img {
        width: 100% !important;
        height: 300px;
        margin-bottom: 20px;
    }

    .about {
        flex-direction: column;
    }
}

@keyframes upAndDown {
    0% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(-5px);
    }

    50% {
        transform: translateY(0);
    }

    75% {
        transform: translateY(5px);
    }

    100% {
        transform: translateY(0);
    }
}

.mdi:before {
    color: #273E86 !important;
}

.v-card {
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    transition: all 0.3s ease;
    cursor: pointer;
}

.v-card:hover {
    border: 1px solid #273E86 !important;
}
</style>
