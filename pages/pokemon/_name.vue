<template>
  <div v-if="pokemon" class="pokemon-detail">
    <h1>{{ pokemon.name }}</h1>
    <img :src="pokemon.sprites.front_default" alt="pokemon image" />
    <div class="pokemon-stats">
      <p><strong>Height:</strong> {{ pokemon.height }}</p>
      <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
    </div>
  </div>
  <div v-else>
    <p>Pokémon not found.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData({ params }) {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
      return { pokemon: response.data };
    } catch (error) {
      return { pokemon: null };
    }
  }
};
</script>

<style scoped>
.pokemon-detail {
  text-align: center;
  padding: 20px;
}
.pokemon-stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.pokemon-stats p {
  background-color: #f5f5f5;
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  min-width: 100px;
  text-align: left;
}
</style>
