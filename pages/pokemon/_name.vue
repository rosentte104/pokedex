<template>
  <div v-if="pokemon" class="pokemon-detail">
    <h1>{{ pokemon.name }}</h1>
    <img :src="pokemon.sprites.front_default" alt="pokemon image" />
    <div class="pokemon-stats">
      <p><strong>Height:</strong> {{ pokemon.height }}</p>
      <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
    </div>
    <button @click="goBack" class="back-button">Back</button>
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
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.pokemon-detail {
  text-align: center;
  padding: 20px;
}
.back-button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s;
}
.back-button:hover {
  background-color: #555;
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
