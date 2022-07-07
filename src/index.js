import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router} from './router.js'
import PrimeVue from 'primevue/config'
import App from './App.vue'

import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import ScrollPanel from 'primevue/scrollpanel';
import Listbox from 'primevue/listbox';

import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"    

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(PrimeVue)

app.component('Button', Button)
app.component('Breadcrumb', Breadcrumb)
app.component('ScrollPanel', ScrollPanel)

app.mount('#app')