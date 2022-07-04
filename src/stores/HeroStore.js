import { defineStore } from "pinia"

export const useHeroStore = defineStore("HeroStore", {
    state: () => {
        return {
            characters: [ 
                {id: 0},
                {id: 1},
                {id: 2}
             ]
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

