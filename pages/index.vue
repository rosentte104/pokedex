<template>
  <div>
    <Menu />
    <SearchBar @search="handleSearch" :error="searchError" />
    <div class="pokemon-list">
      <div
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        @click="goToDetail(pokemon.name)"
        class="pokemon-item"
      >
        {{ pokemon.name }}
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue';
import SearchBar from '~/components/SearchBar.vue';
import axios from 'axios';

export default {
  components: {
    Menu,
    SearchBar
  },
  data() {
    return {
      pokemons: [],
      searchError: ''
    };
  },
  async mounted() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
      this.pokemons = response.data.results;
    } catch (error) {
      console.error(error);
    }
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
    },
    goToDetail(pokemonName) {
      this.$router.push(`/pokemon/${pokemonName}`);
    }
  }
};
</script>

<style scoped>
.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.pokemon-item {
  cursor: pointer;
  margin: 5px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f5f5f5;
  transition: background-color 0.3s, border-color 0.3s;
}
.pokemon-item:hover {
  background-color: #e0e0e0;
  border-color: #888;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
