import { 
    createWebHistory,
    createRouter,
} from 'vue-router'
import Nav from './features/Nav.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Nav,
        }
    ]
})

export { router }