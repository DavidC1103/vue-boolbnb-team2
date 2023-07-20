  <script>

import Main from "../components/Main.vue"
import jumbotron from "../components/partials/jumbotron.vue"



  export default {
    name: "Home",
    components: {
      Main,
      jumbotron
    }


  }
  </script>


<template>

  <jumbotron class="jumbo"/>
  <Main/>

</template>


<style>

</style>