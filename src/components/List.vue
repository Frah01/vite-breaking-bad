<script>
import axios from 'axios';
import AppSelect from './AppSelect.vue';
import CharacterCard from './Card.vue';
import { store } from './store.js';

export default {
    components: {
        CharacterCard,
        AppSelect,
    },
    data() {
        return {
            store,
            searchText: "",
        }
    },
    methods:{
        search(word) {
            this.$emit('search');
        },
        select_archetype(value) {
                axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${value}`).then((response) => {
                store.cards = response.data.data;
                store.loading = false;
            })
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <AppSelect :archetype="store.charactersList" @selection="select_archetype"></AppSelect>
        <h2>{{store.cards.length}}</h2>
        <div v-if="store.loading">
            sto caricando
        </div>
        <div v-else>
            <div class="card-container d-flex justify-content-between flex-wrap">
                <CharacterCard />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card-container {
    margin: 0 auto;
    width: 90%;
    background-color: white;
}
</style>