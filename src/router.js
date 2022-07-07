import { 
    createWebHistory,
    createRouter,
} from 'vue-router'
import Nav from './features/Nav.vue'
import HeroManagement from './features/HeroManager/HeroManagement.vue'
import HeroView from './features/HeroManager/HeroView/HeroView.vue'
import KinSelect from './features/HeroManager/HeroNew/KinSelect.vue'
import BondSelect from './features/HeroManager/HeroNew/BondSelect.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Nav,
        },
        {
            path: '/hero_management',
            component: HeroManagement,
        },
        {
            path: '/hero/:id',
            component: HeroView
        },
        {
            path: '/hero_management/new',
            component: KinSelect,
        },
        {
            path: '/hero_management/test',
            component: BondSelect,
        }
    ]
})

export { router }