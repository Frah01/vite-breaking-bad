<script>
import CharacterCard from './Card.vue';
import { store } from './components/store.js';
export default {
    computed: {
        CharacterCard,
    },
    props: {
        archetype : Object,
    },
    data(){
        return{
            change: '',
            store,
        }
    }
}
</script>
<template lang="">
    <div>
        <div class="container" >
                <div class="row" >
                    <!-- <div class="col-10 offset-1 my-1" >
                        <select  v-model="searchText" @change="$emit('search', change)" v-model="change">
                        <Option v-for="(item, index) in store.charactersList" :key="index" :character="item">
                    </select>
                    </div> -->
                </div>
            </div>
    </div>
</template>
<style lang="">
    
</style>