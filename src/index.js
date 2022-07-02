import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router} from './router.js'
import PrimeVue from 'primevue/config'
import App from './App.vue'

import ToggleButton from 'primevue/togglebutton'

import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"    

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(PrimeVue)

app.component('ToggleButton', ToggleButton)

app.mount('#app')