<script setup>
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()



const { loading, error } = storeToRefs(useAuthStore())
const { login } = useAuthStore()


const form = ref({
  email: '',
  password: '',
})

const isPasswordVisible = ref(false)

const onSubmit = () => {
  login(form.value)
}
</script>

<template>
  <VDialog
    v-model="error"
    width="auto"
  >
    <VCard>
      <VCardText>
        Email atau password salah
      </VCardText>
      <VCardActions>
        <VBtn
          color="primary"
          block
          @click="error = false, form.email = '', form.password = ''"
        >
          Ok
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      width="448"
    >
      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">
          Griya Elektrik 
        </h5>
        <p class="mb-0">
          Masuk ke akun anda
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="onSubmit">
          <VRow>
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                autofocus
                placeholder="johndoe@email.com"
                label="Email"
                type="email"
              />
            </VCol>

            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <VBtn
                block
                type="submit"
                class="mt-4"
              >
                {{ loading ? 'Loading...' : 'Login' }}
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";

.text-danger {
  color: #f44336;
}
</style>
