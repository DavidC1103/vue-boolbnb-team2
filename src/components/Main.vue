<script>
import testimonials from './partials/testimonials.vue';
import accordion from './partials/accordion.vue';
import { store } from '../data/store';
import axios from 'axios';


export default{
    name: 'Main',
    components: {
        testimonials,
        accordion,
        store

    },
    data(){
        return{
            store
        }
    },
    methods:{

        apiCall(){
            axios.get(store.apiUrl + 'apartments')
            .then(result=>{
                store.arrApartments = result.data.sponsored_apartments
                store.arrServices = result.data.availableServices
            })
        }
    },
    mounted(){
    this.apiCall()
    }
}
</script>

<template>
    <main class="container">
        <h1 class="text-start py-1 mt-4 mb-3" id="evidenza">In evidenza</h1>
        

            <!-- Cards container -->
            <div class="container-card d-flex flex-wrap justify-content-center">

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
                
                
                
            </div>

    </main>
    <testimonials/>
    <accordion/>
</template>

<style lang="scss">
@use '../scss/main.scss' as *;

    main{
        margin-bottom: 50px;
        margin-top: 100px;
        .container-card{
            width: 100%;
            height: 100%;
            .boolbnb-card{
                flex-basis: 30%;
                margin: 10px 20px;
                img{
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                    border-radius: 10px;
                }

                p{
                    color: gray;
                }
            }
        }
        
    }

</style>