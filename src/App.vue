<script setup>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
</script>

<template>

  <Header/>
  <router-view></router-view>
  <Footer/>
  
</template>

<style lang="scss">
@use '../src/scss/main.scss';

</style>
