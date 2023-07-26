<script>
import { store } from '../../data/store';

export default {
    name: 'card',

    props:{
        img : String,
        title : String,
        address: String,
        price : Number
    }
}
</script>

<template>
    <!-- Single card -->
    <div
        class="boolbnb-card"
        >

        <!-- <img :src=" 'http://127.0.0.1:8000/storage/' +  apartment.cover_image ">
        <h3>{{ apartment.title }}</h3>
        <p>{{ apartment.address }}</p>
        <h6><strong>{{ apartment.price }} &euro;</strong> a notte</h6> -->
        <img :src="img">
        <h3>{{ title }}</h3>
        <p>{{ address }}</p>
        <h6><strong>{{ price }} &euro;</strong> a notte</h6>

    </div>
    
</template>


<style>

</style>