<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue';
import List from './components/List.vue';
import { store } from './components/store.js';

export default {
  components: {
    AppHeader,
    List,
  },
  data() {
    return {
      store
    }
  },
  created() {
    this.getCharacters();
  },
  methods: {
    getCharacters() {
      // OGGETTI SELECT
      axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((response) => {
        store.charactersList = response.data
      })
    },
    searchCard(){
      this.$emit('search', this.searchOption);
    }
  }
}
</script>
<template lang="">
  <div>
    <AppHeader message="Yu-GiOh Api"></AppHeader>
    <main>
      <List @search="getCharacters" />
    </main>
  </div>
</template>
<style lang="scss">
@use './styles/general.scss' as *;
</style>