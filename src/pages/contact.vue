<template>
  <VContainer class="mt-5">
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <h1 class="text-h6 font-weight-bold mb-3">
          Lokasi Kami
        </h1>
        <iframe
          :src="iframe_map"
          width="100%"
          height="350"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          class="google-map"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <h1 class="text-h6 font-weight-bold mb-3">
          Kontak Kami
        </h1>
        <p class="text-p mb-3">
          Jika Anda memiliki pertanyaan, saran, atau kritik, silahkan hubungi kami melalui
          formulir
          di bawah ini.
        </p>
        <form>
          <VTextField
            label="Nama"
            variant="outlined"
          />
          <VTextField
            label="Email"
            variant="outlined"
          />
          <VTextarea
            label="Pesan"
            variant="outlined"
          />
          <button
            type="submit"
            class="btn-primary"
          >
            Kirim
          </button>
        </form>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useBranchStore } from '@/stores/branch'


const { fetchMainBranch } = useBranchStore()

const iframe_map = ref('')

const fetchMainBranchData = async () => {
  try {
    const branch = await fetchMainBranch()

    iframe_map.value = branch.iframe_map
  } catch (error) {
    console.error('Error fetching main branch data:', error)
  }
}


onMounted(() => {
  document.title = 'Kontak Kami'

  fetchMainBranchData()
})
</script>

<style scoped>
.google-map {
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


.btn-primary {
    background-color: #273E86;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

form {
    display: flex !important;
    flex-direction: column !important;
    gap: 1rem !important;
}
</style>
