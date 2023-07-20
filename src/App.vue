<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import {store} from "./data/store.js";
import axios from "axios";

export default { 
  name: "App",
  components: {
    Header,
    Footer
  },
  data(){
    return{
      store,
      apartments: [],
    }
  },
  methods:{

    apiCall(){
      axios.get(store.apiUrl + "apartments").then(result=>{
        this.apartments = result.data
        console.log(this.apartments)
      })
    }
  },
  mounted(){
    this.apiCall()
  }
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
