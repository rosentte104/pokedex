export default {
  // Other config options

  // Router configuration
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/pokemon/:name',
        component: resolve(__dirname, 'pages/pokemon/_name.vue')
      });
    }
  }
};