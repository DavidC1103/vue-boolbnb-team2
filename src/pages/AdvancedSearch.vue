<script>
import { store } from '../data/store';
import axios from 'axios';

export default {
  name: 'AdvancedSearch',
  data() {
    return {
      longitude: 14.198047,
      latitude: 40.803755,
      radius: 2000,
      store
    };
  },
  methods: {
    searchApartments() {
      const requestData = {
        longitude: this.longitude,
        latitude: this.latitude,
        radius: this.radius
      };

      console.log('requestData:', requestData);

      axios.post(store.apiUrl + 'search/', requestData)
        .then(response => {
          store.arrApartments = response.data.filteredApartments;
          console.log('response.data', response.data); 
          console.log('store.arrApartments', store.arrApartments);
      })
        .catch(error => {
          console.error(error);
          console.error("Error status:", error.response.status);
          console.error("Error data:", error.response.data);
        });
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

