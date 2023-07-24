<script>
import { store } from '../data/store';
import axios from 'axios';

export default {
  name: 'AdvancedSearch',
  data() {
    return {
      latitude: 40.803755,
      longitude: 14.198047,
      radius: 50000,
      arrSearch :[],
      store
    };
  },
  methods: {
    searchApartments() {
      const requestData = {
        latitude: this.latitude,
        longitude: this.longitude,
        radius: this.radius
      };

      console.log('requestData:', requestData);

      axios.post(store.apiUrl + 'search', requestData)
        .then(response => {
          this.arrSearch = response.data.apartments;
          console.log(this.arrSearch); 
      })
    }
  },
  mounted() {
    this.searchApartments();
  }
}

</script>

<template>

</template>


<style lang="scss" scoped>

</style>

