import { 
    createWebHistory,
    createRouter,
} from 'vue-router'

import MainMenu from './features/MainMenu.vue'
import HeroManager from './features/HeroManager/HeroManager.vue'
import SelectKin from './features/HeroManager/HeroNew/KinSelect.vue'
import SelectBond from './features/HeroManager/HeroNew/BondSelect.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainMenu,
        },
        {
            path: '/hero_management',
            component: HeroManager,
            meta: { transition: 'slide-left' }
        },
        {
            path: '/hero_management/new/kin',
            component: SelectKin,
        },
        {
            path: '/hero_management/new/bond',
            component: SelectBond,
        },
    ]
})

export { router }