<template>
    <herocard
                v-for="hero in testeporra"
                :key="hero.id"
                :hero="hero"
    />
</template>

<script>
import { computed } from 'vue'
import { useHeroStore } from '../stores/HeroStore.js'
import HeroCard from '../components/hero_management/HeroCard.vue'

export default({
    components: {
        HeroCard
    },
    setup() {
        const heroStore = useHeroStore()

        const testeporra = [ 
                {id: 0},
                {id: 1},
                {id: 2}
            ]
        console.log(testeporra.values)
        console.log(testeporra[0])
        console.log(testeporra[1])
        
        return{
            testeporra,
            heroes: computed(() => heroStore.characters),
        }
    }
})
</script>

<style scoped>
</style>
