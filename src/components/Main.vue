<script>
import testimonials from './partials/testimonials.vue';
import accordion from './partials/accordion.vue';
import popularSearch from "./partials/_popularSearch.vue";
import partner from "./partials/_partner.vue";
import { store } from '../data/store';
import axios from 'axios';


export default{
    name: 'Main',
    components: {
        testimonials,
        accordion,
        popularSearch,
        partner,
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
    <main class="ps-container">
        <h1 class="text-start py-1 mt-4 mb-3" id="evidenza">In evidenza</h1>
        

            <!-- Cards container -->
            <div class="container-card d-flex flex-wrap justify-content-center">

                <!-- Single card -->
                <div
                    class="boolbnb-card active reveal fade-left"
                    v-for="apartment in store.arrApartments"
                    :key="apartment.id"
                    @click="$router.push('/detail-apartment/' + apartment.slug)">

                    <img :src=" 'http://127.0.0.1:8000/storage/' +  apartment.cover_image ">
                    <div class="description-card">

                        <h3>{{ apartment.title }}</h3>
                        
                        <div class="icon d-flex">
                            <div class="measure">
                                <img src="../assets/img/measure.png" alt="">
                                <span><strong>{{ apartment.square_meters }}</strong> m²</span>
                            </div>

                            <div class="bed">
                                <img src="../assets/img/bed.png" alt="">
                                <span><strong>{{ apartment.n_beds }}</strong> Letti </span>
                            </div>

                            <div class="bathroom">
                                <img src="../assets/img/bathroom.png" alt="">
                                <span><strong>{{ apartment.n_bathrooms }}</strong> Bagni </span>
                            </div>
                        </div>
                        <h5><strong>&euro; {{ apartment.price }}</strong><span>/ notte</span></h5>
                    </div>
                </div>
                
            </div>

    </main>
    <popularSearch/>
    <testimonials/>
    <accordion/>
    <partner/>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss' as *;

    .ps-container{
        max-width: 1600px;
        margin: 0 auto;
        h1{
            margin-left: 40px;
        }
    }

    main{
        margin-bottom: 50px;
        margin-top: 100px;
        .container-card{
            width: 100%;
            height: 100%;
            .boolbnb-card{
                border-radius: 15px;
                flex-basis: 30%;
                margin: 20px 20px;
                box-shadow: rgba(200, 200, 200, 0.5) 0px 0px 0.5rem 0px;
                overflow: hidden;
                &:hover {
                    box-shadow: 0 0.5em 0.5em -0.4em rgba(200, 200, 200, 0.5);
                    background-size: 100% 100%;
                    transform: translateY(-0.15em);
                }

                &:nth-child(3n+2){
                    animation: fade-top 1s ease-in;

                    @keyframes fade-top {
                            0% {
                            transform: translateY(100px);
                            opacity: 0;
                            }
                            100% {
                            transform: translateY(0);
                            opacity: 1;
                            }
                        }
                }

                &:nth-child(3n+3){
                    animation: fade-right 1s ease-in;

                    @keyframes fade-right {
                            0% {
                            transform: translateX(100px);
                            opacity: 0;
                            }
                            100% {
                            transform: translateX(0);
                            opacity: 1;
                            }
                        }
                }

                &:hover{
                    cursor: pointer;
                }
                &:hover img{
                    width: 103%;
                    filter: opacity(100%);;
                }

                img{
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                    border-radius: 10px 10px 0px 0px;
                    transition: 1s ease;  
                    filter: opacity(80%);                  
                }

                .description-card{
                    
                    h3{
                        padding: 20px;
                    }
                    .icon{
                        padding: 0px 0px 20px 20px;
                        border-bottom: 1px solid rgb(229, 229, 229);
                        img{
                            height: 30px;
                            width: 30px;
                            margin-right: 2px;
                        }
                        div{
                            margin-right: 30px;
                            display: flex;
                            align-items: center;
                        }
                    }
                    h5{
                        padding: 20px;
                        span{
                            color: rgb(117, 117, 117);
                            font-size: 16px;
                            font-weight: 300;
                        }
                    }
                }
            }
        }
        
    }


@media (min-width: 0 ) and (max-width: 575px){

.boolbnb-card{
    flex-basis: 70% !important;

    img{
        height: 160px !important;
    }
    .description-card{
        h3{
            font-size: 1rem;
            margin-bottom: 0px;
            padding: 8px 20px !important;
        }
        h5{
            font-size: 1.2rem;
            padding: 8px 20px !important;
        }
    }
    .icon{
        
        img{
            height: 15px !important;
            width: 15px !important;
        }
        div{
            margin-right: 12px !important;
            span{
                font-size: 0.8rem;
            }
        }
    }

}
}

@media (min-width: 576px ) and (max-width: 950px){

    .boolbnb-card{
    flex-basis: 40% !important;

    img{
        height: 160px !important;
    }
    .description-card{
        h3{
            font-size: 1rem;
            margin-bottom: 0px;
            padding: 8px 20px !important;
        }
        h5{
            font-size: 1.2rem;
            padding: 8px 20px !important;
        }
    }
    .icon{
        
        img{
            height: 15px !important;
            width: 15px !important;
        }
        div{
            margin-right: 8px !important;
            span{
                font-size: 0.8rem;
            }
        }
    }

}
}



</style>