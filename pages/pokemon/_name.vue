<template>
  <div v-if="pokemon" class="pokemon-detail">
    <Menu />
    <button @click="goBack" class="back-button">Back</button>
    <h1>{{ pokemon.name }}</h1>
    <img :src="pokemon.sprites.front_default" alt="pokemon image" />
    <div class="pokemon-stats">
      <p><strong>Height:</strong> {{ pokemon.height }}</p>
      <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
      <p><strong>Base Experience:</strong> {{ pokemon.base_experience }}</p>
      <p><strong>Abilities:</strong></p>
      <ul>
        <li v-for="ability in pokemon.abilities" :key="ability.ability.name">
          {{ ability.ability.name }}
        </li>
      </ul>
      <p><strong>Stats:</strong></p>
      <ul>
        <li v-for="stat in pokemon.stats" :key="stat.stat.name">
          {{ stat.stat.name }}: {{ stat.base_stat }}
        </li>
      </ul>
      <p><strong>Types:</strong></p>
      <ul>
        <li v-for="type in pokemon.types" :key="type.type.name">
          {{ type.type.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue';
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
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
.pokemon-stats p {
  font-weight: bold;
  margin-bottom: 5px;
}
.pokemon-stats ul {
  list-style: none;
  padding: 0;
}
.pokemon-stats ul li {
  background-color: #f5f5f5;
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  min-width: 200px;
  text-align: left;
  margin-bottom: 5px;
}
</style>
