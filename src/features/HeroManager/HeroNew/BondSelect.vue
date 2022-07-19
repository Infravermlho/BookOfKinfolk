<template>
    <div class="title mt-10">
        <h1 style="text-align:center"> Pick your Bond </h1>
        <v-divider/>
    </div>
    <v-container>
        <v-row
            class="fill-height"
            align="center"
            justify="center"
        >
            
            <template 
                v-for="(bond, i) in bonds"
                :key="i"
            >
                <v-hover v-slot="{ isHovering, props }">
                    <v-card
                        :elevation="isHovering ? 12 : 2"
                        class="ma-1"
                        :class="{ 'on-hover': isHovering }"
                        v-bind="props"
                        width="30%"
                        height="auto"
                    >
                        <v-icon 
                            style="float: right;"
                            v-if="bond.icon"
                        > 
                            {{ bond.icon }} 
                        </v-icon>

                        <v-card-text>
                            <p class="text-h4 text--primary">
                                {{ bond.title }}
                            </p>
                            <div class="text--primary" style="height:28px">
                                {{ bond.subtitle }}
                            </div>
                        </v-card-text>
                        
                        <v-expand-transition>
                            <v-card
                                v-if="isHovering"
                                class="transition-fast-in-fast-out v-card--reveal"
                                style="height:100%"
                                color="#C0C0C0"
                            >
                                <v-card-text class="text-center">
                                    <p> {{ bond.description }} </p>
                                </v-card-text>
                            </v-card>
                        </v-expand-transition>

                        <v-sheet 
                            style="position: relative"
                            >
                            <v-btn
                                class="py-2"
                                style="width:100%; height:auto"
                                color="deep-purple accent-3"
                            >
                                Read more
                            </v-btn>
                        </v-sheet>
                    </v-card>
                </v-hover>
            </template>
        </v-row>
    </v-container>
</template>

<script>
import { computed, ref } from 'vue'
import { useNarrativeStore } from '../../../stores/NarrativeStore.js'
import BondSelector from './components/BondDialog.vue'

export default {
    setup() {
        const narrativeStore = useNarrativeStore()

        return {
            bonds: computed(() => narrativeStore.bonds),  
        }
    }
}
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 0.95 !important;
  position: absolute;
  width: 100%;
}
</style>

