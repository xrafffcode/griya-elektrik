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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.073394394073!2d106.8222423147697!3d-6.175392995514768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4f3f3e4f3e7%3A0x3e3e3e3e3e3e3e3e!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1629783940733!5m2!1sid!2sid"
          width="100%"
          height="300"
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

<script>
import { onMounted } from 'vue'

export default {
  name: 'ContactUs',
  setup() {
    onMounted(() => {
      document.title = 'Kontak Kami'
    })
  },
}
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
