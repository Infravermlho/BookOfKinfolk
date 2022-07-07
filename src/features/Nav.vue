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
            <router-link 
                :to="'hero_management'" 
                style="text-decoration: none"
            >
                <Button 
                    id="sidebar"
                    label="Hero Entries" 
                    class="p-button-raised p-button-primary p-button-text" 
                />
            </router-link>
        </template>

        <template v-slot:content>
            <router-view />
        </template>
    </layout>
</template>

<script>
import Layout from "../components/Layout.vue"

export default {
    components: {
        Layout,
    },

    setup() {
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
</style>