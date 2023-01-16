import { reactive } from 'vue';
export const store = reactive({
    url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?race=insect",
    charactersList: [],
    apiNameParameter: 'name',
})