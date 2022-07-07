import { defineStore } from "pinia"
import kins  from "../content/base_game/Kins.json"
import cultures  from "../content/base_game/Cultures.json"
import bonds from "../content/base_game/Bonds.json"

export const useNarrativeStore = defineStore("NarrativeStore", {
    state: () => {
        return {
            kins,
            cultures,
            bonds
        }
    },

    actions: {
        setKins(payload) {
            this.kins = payload 
        },
        setCultures(payload) {
            this.cultures = payload 
        },
        setBonds(payload) {
            this.bonds = payload 
        }
    }
})