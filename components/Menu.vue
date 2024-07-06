<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/search">Search</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #333;
  padding: 10px;
  margin-bottom: 10px;
}
ul {
  list-style: none;
  display: flex;
  gap: 10px;
  padding: 0;
  margin: 0;
}
li {
  margin: 0;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}
a:hover {
  background-color: #555;
}
</style>
