import { defineStore } from "pinia"

export const useHeroStore = defineStore("HeroStore", {
    state: () => {
        return {
            characters: {}
            //id
            //CName
            //PName
            //Pronouns
            //Description
            //Chapter

            //Kintype
            //Culture
            //Bond
            //BondPowers: []

            //Ambitions: []
            //Burdens: []
                
            //Level
            //Dust
            //Stress
            //Harm
        }
    }
})

