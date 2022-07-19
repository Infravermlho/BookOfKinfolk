<template>
    <v-container 
        fluid 
        class="wrapper"
    >
        <v-row>
            <v-col cols="2">
                <v-row>
                    <v-col>
                        <h1 style="text-align: center;"> Kin </h1>
                        <v-divider/>
                        <v-btn-toggle
                            style="height: auto; width: 100%;"
                            v-model="selectedKin"
                            tile
                            color="deep-purple accent-3"
                            group
                            class="flex-column align-center"
                        >
                            <v-btn
                                v-for="kin in kins"
                                :key="kin.id"
                                :value="kin.id"
                                @mouseover="hoveredKin(kin.id)"
                                @click="lockKin"
                                class="py-3"
                                block
                            >
                                {{ kin.name }}
                            </v-btn>
                        </v-btn-toggle>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <h1 style="text-align: center;"> Cultures </h1>
                        <v-divider/>
                        <v-btn-toggle
                            style="height: auto; width: 100%;"
                            v-model="selectedCulture"
                            tile
                            color="deep-purple accent-3"
                            group
                            class="flex-column align-center"
                        >
                            <v-btn
                                v-for="culture in cultures"
                                :key="culture.id"
                                :value="culture.id"
                                @mouseover="hoveredCulture(culture.id)"
                                @click="lockCulture"
                                class="py-2"
                                block
                            >
                                {{ culture.name }}
                            </v-btn>
                        </v-btn-toggle>
                    </v-col>
                </v-row>
            </v-col>

            <v-col
                cols="4">
                <v-row 
                    align="center" 
                    justify="center"
                >
                    <div v-if='displayKin' class="display">
                        <v-img 
                            :src="displayKin.image_url" 
                            width="200"
                            style="margin-left:auto; margin-right:auto;"
                        />
                        <v-divider/>
                        <h1 style="text-align: center;"> {{ displayKin.name }} </h1>
                        <v-sheet style="overflow:auto">
                            <span v-html="displayKin.description"/>
                        </v-sheet>
                    </div>
                </v-row>
            </v-col>

            <v-col>
                <v-row
                    align="center"
                    justify="center"
                    class="mx-1"
                >
                <div v-if='displayCulture' class="display">
                    <h1 style="text-align: center; margin-top: 70px"> {{ displayCulture.name }} </h1>
                    <h2 style="text-align: center;"> {{ displayCulture.traits }} </h2>
                    <h2 style="text-align: center; color: darkslateblue; margin-top: 10px"> +1 to two: {{ displayCulture.bonus[0] }}, {{ displayCulture.bonus[1] }}, or {{ displayCulture.bonus[2] }} </h2>
                    
                    <v-sheet style="overflow:auto;">
                            <span v-html="displayCulture.description"/>
                    </v-sheet>
                </div>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { computed, ref } from 'vue'
import { useNarrativeStore } from '../../../stores/NarrativeStore.js'

export default({
    setup() {
        const narrativeStore = useNarrativeStore()
        const selectedKin = ref()
        const selectedCulture = ref()
        const displayKin = ref()
        const displayCulture = ref() 

        const lockKin = () => {
            if (selectedKin.value) {
            displayKin.value = narrativeStore.kins.find(
                kin => kin.id === selectedKin.value
            )}
        }
        const lockCulture = () => {
            if (selectedCulture.value) {
            displayCulture.value = narrativeStore.cultures.find(
                culture => culture.id === selectedCulture.value
            )}
        }

        const hoveredKin = (id) => {
            if (!selectedKin.value) {
            displayKin.value = narrativeStore.kins.find(
                kin => kin.id === id
            )}
        }
        const hoveredCulture = (id) => {
            if (!selectedCulture.value) {
            displayCulture.value = narrativeStore.cultures.find(
                culture => culture.id === id
            )}

        }

        return {
            selectedKin,
            selectedCulture,
            hoveredKin,
            hoveredCulture,
            displayKin,
            displayCulture,
            lockKin,
            lockCulture,
            kins:     computed(() => narrativeStore.kins),   
            cultures: computed(() => narrativeStore.cultures),  
        }
    },
})
</script>

<style scoped>
.display {
    height: 700px;
    display:flex;
    flex-direction: column;
}
.wrapper {
    min-width:900px;
    width: 100%;
    height: 100%;
}
</style>