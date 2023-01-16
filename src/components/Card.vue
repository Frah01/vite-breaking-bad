<script>
export default {
    props: {
        character: Object
    }
}
</script>
<template lang="">
  <div class="character text-center d-flex flex-column">
        <img :src="character.card_images[0].image_url_small" :alt="character.name" class="img-fluid">
    <h4>{{character.name}}</h4>
    <div>{{character.archetype}}</div>
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