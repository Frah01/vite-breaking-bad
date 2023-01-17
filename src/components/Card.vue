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
    <div class="container_card d-flex flex-wrap justify-content-around">
            <div class="cards m-2" v-for="(value, index) in store.cards" :key="index">
                    <AppCardVF :url="value.card_images[0].image_url" :title="value.name" :type="value.archetype" />
                </div>
            </div>
  </div>
</template>
<style lang="scss" scoped>

.cards{
    width: calc(100% / 4);
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.5);
}
.character {
    border: 1px solid black;
    margin: 1em 1em;
    padding: 1em;
    background-color: rgb(53, 62, 65);
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