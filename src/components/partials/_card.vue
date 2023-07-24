<script>
import { store } from '../data/store';

export default {

}
</script>

<template>
    <!-- Single card -->
    <div
        class="boolbnb-card"
        v-for="apartment in store.arrApartments"
        :key="apartment.id">

        <img :src=" 'http://127.0.0.1:8000/storage/' +  apartment.cover_image ">
        <h3>{{ apartment.title }}</h3>
        <p>{{ apartment.address }}</p>
        <h6><strong>{{ apartment.price }} &euro;</strong> a notte</h6>

        <span><router-link :to="{name:'detailApartment', params:{slug:apartment.slug}}">Dettaglio</router-link></span>

    </div>
    
</template>


<style>

</style>