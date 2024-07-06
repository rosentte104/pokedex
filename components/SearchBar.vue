<template>
  <div>
    <input type="text" v-model="searchQuery" @keyup.enter="performSearch" placeholder="Search Pokémon" />
    <button @click="performSearch">Search</button>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    error: String
  },
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    performSearch() {
      if (this.searchQuery.trim()) {
        this.$emit('search', this.searchQuery.trim().toLowerCase());
      }
    }
  }
};
</script>

<style scoped>
input {
  padding: 5px;
  margin-right: 5px;
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;
}
input:focus {
  border-color: #888;
}
button {
  padding: 5px 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}
button:hover {
  background-color: #e0e0e0;
  border-color: #888;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
