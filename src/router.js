import { 
    createWebHistory,
    createRouter,
} from 'vue-router'
import Nav from './features/Nav.vue'
import HeroManagement from './features/HeroManagement.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Nav,
        },
        {
            path: '/hero_management',
            component: HeroManagement
        }
    ]
})

export { router }