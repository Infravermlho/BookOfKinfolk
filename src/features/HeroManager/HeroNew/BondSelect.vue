<template>
    <div class="header">
        <h1 class="title">Mark your bond</h1>
    </div>
    <div>
        <div class="selectContainer">
            <button-list
                        :items = bonds
                        id = "id"
                        label = "title"
            />
        </div>
        <bond-display class="display"/>
    </div>
</template>

<script>
import { computed, ref } from 'vue'

import { useNarrativeStore } from '../../../stores/NarrativeStore.js'
import GuideBar from '../../../components/hero_manager_new/GuideBar.vue'
import BondDisplay from '../../../components/hero_manager_new/BondDisplay.vue'
import ButtonList from '../../../components/hero_manager_new/ButtonList.vue'

export default ({
    components: {
        ButtonList,
        BondDisplay,
    },
    setup() {
        const narrativeStore = useNarrativeStore()

        return {
            bonds: computed(() => narrativeStore.bonds),   
        }
    }
})
</script>

<style scoped>
.header {
    border-bottom: 2px dotted silver;
    height: 50px;
}
.selectContainer {
    width: 10%;
    height: 100%;
    border-right: 2px solid silver;
    float: left;
}
.display {
    margin: 2%;
    float: left;
}
.select {
    display: block;
}
</style>