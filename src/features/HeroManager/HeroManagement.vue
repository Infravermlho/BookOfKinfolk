<template>
    <div class="hero-list">
        <hero-card
                    v-for="hero in heroes"
                    :key="hero.id"
                    :hero="hero"
        />
    </div>
    <div class="manage-heroes">

        <router-link 
                to='/hero_management/new'
                style="text-decoration: none"
            >
            <Button
                    id="add"
                    label="Add new" 
                    class="p-button-raised p-button-primary p-button-text" 
                />
        </router-link>

        <Button 
                id="import"
                label="Import new" 
                class="p-button-raised p-button-primary p-button-text" 
            />
    </div>
</template>

<script>
import { computed } from 'vue'
import { useHeroStore } from '../../stores/HeroStore.js'
import HeroCard from '../../components/HeroCard.vue'

export default({
    components: {
        HeroCard
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
