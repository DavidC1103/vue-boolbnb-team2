<script>
    import { store } from '../data/store';
    import axios from 'axios';
export default{
    name: 'DetailApartment',
    data(){
        return{
            store,
            apartment : [],
        }
    },
    methods:{
        detailApi(){
            axios.get(store.apiUrl + 'apartments').then(results=>{
                     //this.apartment = results.data;
                        this.apartment = results.data.filter((apartmentSlug => apartmentSlug.slug == this.$route.params.slug))
                        this.apartment = this.apartment[0]
                        console.log(this.apartment);
            });
        }
    },
    
     mounted(){
         this.detailApi();
     }

}

</script>


<template>
    <div class="detail container">

        
        
            <h1 class="text-center"> Casa al mare </h1>


        
        <div class="mt-5 d-flex">

            <img src="../assets/img/1.webp" alt="">

            <ul>
                <li>Dove si trova : {{ apartment.address }}</li>
                <li>Prezzo : {{ apartment.price }} &euro;</li>

                <li>Servizi :<ul>
                    <li
                    v-for="service in apartment.services"
                    :key="service.id">
                        {{ service.name }}
                    </li>

                </ul></li>
                <li>Stanze : {{ apartment.n_rooms }}</li>
                <li>Letti : {{ apartment.n_beds }}</li>
                <li>Bagni : {{ apartment.n_bathrooms }}</li>
            </ul>

        </div>



        <div class="boolbnb-buttons mt-4">
            <button class="btn btn-outline-primary">Contatta l'utente</button>   
        </div>



    </div>

    

</template>


<style lang="scss">
.detail{
    margin-top: 200px;
    margin-bottom: 200px;
    img{
        width: 900px;
        height: 450px;
    }
    ul{
        li{
            margin-bottom: 66px;
            font-weight: bold;
            &:last-child{
                margin-bottom: 0;
            }
        }
    }
}

</style>