<template>
    <div class="wrapper">
        <div class="selectors">
            <div class="selector">
                <h1 style="border-bottom: 2px solid silver; text-align: center;"> Kin </h1>
                <button-list 
                    :items = kins
                    id = "id"
                    label = "name"
                    @hover="kinHighlight"
                    @click="kinSelect"
                />
            </div>
            <div class="selector">
                <h1 style="border-bottom: 2px solid silver; text-align: center;"> Cultures </h1>
                <button-list 
                    :items = cultures
                    id = "id"
                    label = "name"
                    @hover="cultureHighlight"
                    @click="cultureSelect"
                />
            </div>
        </div>

        <div class="description">
            <div class="descCard" id="kinCard" v-if='currentKin'>
                <img :src="currentKin.image_url"/>
                <h1 style="border-top: 2px solid silver; text-align: center;"> {{ currentKin.name }} </h1>
                <ScrollPanel style="width: 100%; height: 400px" class="custombar">
                    <span v-html="currentKin.description"/>
                </ScrollPanel>
            </div>
            <div class="descCard" id="cultureCard" v-if='currentCulture'>
                <h1 style="text-align: center;"> {{ currentCulture.name }} </h1>
                <h2 style="text-align: center;"> {{ currentCulture.traits }} </h2>
                <h2 style="text-align: center; color: darkslateblue;"> +1 to two: {{ currentCulture.bonus[0] }}, {{ currentCulture.bonus[1] }}, or {{ currentCulture.bonus[2] }} </h2>
                <ScrollPanel style="width: 100%; height: 60vh" class="custombar">
                    <span v-html="currentCulture.description"/>
                </ScrollPanel>
            </div>
        </div>
    </div>
    <guide-bar/>
</template>

<script>
import { computed, ref } from 'vue'
import { useNarrativeStore } from '../../../stores/NarrativeStore.js'
import GuideBar from '../../../components/hero_manager_new/GuideBar.vue'
import ButtonList from '../../../components/hero_manager_new/ButtonList.vue'

export default({
    components: {
        GuideBar,
        ButtonList
    },
    setup() {
        const narrativeStore = useNarrativeStore()
        const currentKin = ref()
        const currentCulture = ref()
        const kinSelected = ref(-1)
        const cultureSelected = ref(-1)
        
        const kinHighlight = (id) => {
            currentKin.value = narrativeStore.kins.find(
                kin => kin.id === id
            )
        }
        const cultureHighlight = (id) => {
            currentCulture.value = narrativeStore.cultures.find(
                culture => culture.id === id
            )
        }
        const kinSelect = (id) => {
            kinSelected.value = id
        }
        const cultureSelect = (id) => {
            cultureSelected.value = id
        }

        return {
            cultureHighlight,
            kinHighlight,
            currentKin,
            currentCulture,
            kinSelect,
            cultureSelect,
            kinSelected,
            cultureSelected,
            
            kins:     computed(() => narrativeStore.kins),   
            cultures: computed(() => narrativeStore.cultures),  
        }
    }
})
</script>

<style scoped>
.wrapper {
    display: flex;
    width: auto;
    height: auto;
}
.selectors {
    min-width: 120px;
    width: 15%;
    height: 100%;
    border-bottom: 2px solid silver;
    padding-bottom: 30px;  
    margin-right: 1vh;
}
.selector {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.description {
    width: 80%;
    height: 800px;
    display: flex;
}
.descCard {
    margin-left: 20px;
    display:flex;
    flex-direction: column;
    min-width: 350px;
    width: 50%;
    height: 100%;
}
#kinCard {
    width: 30%
}
#cultureCard {
    margin-left: 24px;
}
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: auto;
    height: 300px;
    align-content: center;
}
.custombar :deep(.p-scrollpanel-wrapper) {
    border-right: 9px solid #f4f4f4;
}
.custombar :deep(.p-scrollpanel-bar) {
    background-color: #a3c3e4;
    opacity: 1;
    transition: background-color .3s;
}
.custombar :deep(.p-scrollpanel-bar:hover) {
    background-color: #4389ce;
}
</style>