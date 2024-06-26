/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
import VueLazyload from 'vue-lazyload'

import loading from '@/assets/images/loading.gif'


loadFonts()


// Create vue app
const app = createApp(App)

const errorImage = loading
const loadingImage = loading

app.use(VueLazyload, {
  preLoad: 1.3,
  error: errorImage,
  loading: loadingImage,
  attempt: 1,
})


// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.component('EasyDataTable', Vue3EasyDataTable)

// Mount vue app
app.mount('#app')
