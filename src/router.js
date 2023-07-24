import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Apartments from "./pages/Apartments.vue";
import AdvancedSearch from "./pages/AdvancedSearch.vue";

const router = createRouter({
  history: createWebHistory(),

  // qui metteremo le rotte che saranno in un array di oggetti
  routes:[
      {
          path: '/',
          name: 'home',
          component: Home    // anche questo va scritto dopo aver creato il file Home.vue
      },
      {
        path: '/apartments',
        name: 'apartments',
        component: Apartments    // anche questo va scritto dopo aver creato il file Home.vue
      },
      {
        path: '/advanced-search',
        name: 'advanced-search',
        component: AdvancedSearch    // anche questo va scritto dopo aver creato il file Home.vue
      },

  ]
})



export { router };