<script>
import AppCardVF from './AppCardVF.vue';
import {store} from './store.js'
export default {
    components:{
        AppCardVF,
    },
    data(){
        return{
            store,
        }
    }
}
</script>
<template lang="">
  <div class="character" >
    <div class="container_card">
            <div v-for="(value, index) in store.cards" :key="index">
                    <AppCardVF :url="value.card_images[0].image_url" :title="value.name" :type="value.archetype" />
                </div>
            </div>
  </div>
</template>
<style lang="scss" scoped>
.character {
    border: 1px solid black;
    width: 200px;
    margin: 1em 1em;
    padding: 1em;
    background-color: rgb(236, 174, 3);
    border: 1px solid black;

    h4 {
        text-transform: capitalize;
        margin-top: 10px;
        color: white;
    }

    img {
        box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.5);
    }
}
</style>