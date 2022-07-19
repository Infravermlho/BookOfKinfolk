import { createApp }    from 'vue'
import { createPinia }  from 'pinia'
import { router }       from './router.js'
import vuetify from "./plugins/vuetify.js"

import App from './App.vue'

import 'vuetify/styles'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')