<script>
import CharacterCard from './Card.vue';
import { store } from './store.js';

export default {
    components: {
        CharacterCard,
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
            
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div v-if="store.loading">
            sto caricando
        </div>
        <div v-else>
            <div class="container" >
                <div class="row" >
                    <div class="col-10 offset-1 my-1" >
                        <select  v-model="searchText" @change="$emit('search', searchOption)">
                        <Option>
                            Spellcaster
                        </Option>
                        <Option>
                            Insect
                        </Option>
                    </select>
                    </div>
                </div>
            </div>
            <div class="card-container d-flex justify-content-between flex-wrap">
                <CharacterCard v-for="(item, index) in store.charactersList" :key="index" :character="item"/>
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