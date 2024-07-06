<template>
  <div>
    <SearchBar @search="handleSearch" :error="searchError" />
    <div v-if="searchError" class="error">{{ searchError }}</div>
  </div>
</template>

<script>
import SearchBar from '~/components/SearchBar.vue';
import axios from 'axios';

export default {
  components: {
    SearchBar
  },
  data() {
    return {
      searchError: ''
    };
  },
  methods: {
    async handleSearch(pokemonName) {
      try {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        this.$router.push(`/pokemon/${pokemonName}`);
        this.searchError = '';
      } catch (error) {
        this.searchError = 'Pokemon not found.';
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}
</style>
