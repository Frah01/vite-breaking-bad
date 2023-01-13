<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue';
import List from './components/List.vue';
import { store } from './components/store.js';
// loaded
export default {
  components: {
    AppHeader,
    List
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
      axios.get(store.url).then((response) => {
        store.charactersList = response.data.data
        setTimeout(() => {
          store.loading = false
        }, 2000)
      })
    }
  }
}
</script>
<template lang="">
  <div>
    <AppHeader message="Yu-GiOh App"/>
    <main>
      <List />
    </main>
  </div>
</template>
<style lang="scss">
@use './styles/general.scss' as *;
</style>