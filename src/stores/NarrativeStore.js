import { defineStore } from "pinia"
import kins  from "../content/base_game/Kins.json"
import cultures  from "../content/base_game/Cultures.json"
import bonds from "../content/base_game/Bonds.json"

export const useContentStore = defineStore("ContentStore", {
    state: () => {
        return {
            kins,
            cultures,
            bonds
        }
    }
})