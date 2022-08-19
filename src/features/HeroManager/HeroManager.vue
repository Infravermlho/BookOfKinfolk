<template>
    <div id="wrapper">
        <div class="hero-list">
            <v-btn
                        v-for="hero in heroes"
                        :key="hero.id"
            >
            {{ hero.id }}
            </v-btn>
        </div>
        <div class="manage-heroes">

            <router-link 
                    to='/hero_management/new'
                    style="text-decoration: none"
                >
                <v-btn>
                    Create new Hero
                </v-btn>
            </router-link>

            <v-btn>
                Import hero
            </v-btn>
        </div>
    </div>
</template>

<script>
// Refazer essa parte inteira
import { computed } from 'vue'
import { useHeroStore } from './store/HeroStore.js'
export default({
    components: {
    },
    setup() {
        const heroStore = useHeroStore()
        
        return{
            heroes: computed(() => heroStore.characters),
        }
    }
})
</script>

<style scoped>
.hero-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.manage-heroes  {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid silver;
}
Button {
    margin:15px;
}
</style>