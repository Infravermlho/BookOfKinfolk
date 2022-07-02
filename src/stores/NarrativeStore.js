import { defineStore } from "pinia"
import kins  from "../content/base_game/Kins.json"
import bonds from "../content/base_game/Bonds.json"

export const useContentStore = defineStore("ContentStore", {
    state: () => {
        return {
            kins,
            bonds
        }
    }
})

