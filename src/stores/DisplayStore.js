import { defineStore } from "pinia"

export const useDisplayStore = defineStore("DisplayStore", {
    state: () => {
        return {
            sidebar_enable: true
        }
    },

    actions: {
        sidebarEnable() {
            this.sidebar_enable = true
        },
        sidebarDisable() {
            this.sidebar_enable = false
        }
    }
})

