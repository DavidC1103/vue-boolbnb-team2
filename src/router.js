import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Apartments from "./pages/Apartments.vue";
import AdvancedSearch from "./pages/AdvancedSearch.vue";
import DetailApartment from "./pages/DetailApartment.vue";
import AboutUs from "./pages/AboutUs.vue";

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'link-active',
  

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
      {
        path: '/detail-apartment/:slug',
        name: 'detailApartment',
        component: DetailApartment    // anche questo va scritto dopo aver creato il file Home.vue
      },
      {
        path: '/about-us',
        name: 'about-us',
        component: AboutUs    // anche questo va scritto dopo aver creato il file Home.vue
      },

  ]
})



export { router };