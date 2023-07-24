<script>
import { store } from '../data/store';
import axios from 'axios';

export default {
    name: 'AdvancedSearch',

    components: {
        store,
    },

    data() {
        return {
            longitude: 14.198047, // Inizializzare i valori per la ricerca
            latitude: 40.803755,
            radius: 20,
            apartments: [],
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

            console.log(this.searchApartments());

            axios.post('advanced-search', requestData)
                .then(response => {
                    this.apartments = response.data.filteredApartments;
                    console.log(response);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted(){
    this.searchApartments()
    }
}
</script>

<template>

</template>


<style lang="scss" scoped>

</style>