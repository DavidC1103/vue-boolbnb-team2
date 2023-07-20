<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import {store} from "./data/store.js";
import axios from "axios";

export default { 
  name: "App",
  components: {
    Header,
    Footer,
    store
  },
  data(){
    return{
      store,
    }
  },
}

</script>

<template>

  <Header/>
  <router-view></router-view>
  <Footer/>
  
</template>

<style lang="scss">
@use '../src/scss/main.scss';

</style>
