<script>
import CharacterCard from './Card.vue';
import { store } from './store.js';

export default {
    components: {
        CharacterCard,
    },
    data() {
        return {
            store
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