<template>
    <layout>
        <template v-slot:header>
            <h1>Book of Kinfolk</h1>
        </template>

        <template v-slot:sidebar>
            <Button 
                id="sidebar"
                label="Glossary" 
                class="p-button-raised p-button-secondary p-button-text" 
            />
            <br/>
            <Button 
                id="sidebar"
                label="Hero Entries" 
                class="p-button-raised p-button-primary p-button-text" 
                @click="navigateHeroEntries"
            />
        </template>

        <template v-slot:content>
            <router-view />
        </template>
    </layout>
</template>

<script>
import { useRouter } from 'vue-router'
import Layout from "../components/Layout.vue"

export default {
    components: {
        Layout,
    },

    setup() {
        const router = useRouter()

        const navigateHeroEntries = () => {
            router.push('hero_management')
        }

        return {
            navigateHeroEntries
        }
    }
}
</script>

<style scoped>
#sidebar  {
    padding: 10px;
    margin: 0 10px 5px 0;
    font-size: 18px;
    width: 100%;
    display: block;
    text-align: center;
    text-decoration: none;
    font-family: Arial;
}
.Body {
    display: flex;
    justify-content: center;
    align-items: center;
}
#Book {
    max-width: 100%;
    max-height: 100%;
    height: auto;
}
</style>