<template>
    <herocard
                v-for="hero in heroes"
                :key="hero.id"
                :hero="hero"
    />
</template>

<script>
import { useHeroStore } from '../stores/HeroStore'
import HeroCard from '../components/hero_management/herocard.vue'

export default({
    components: {
        HeroCard,
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
</style>
