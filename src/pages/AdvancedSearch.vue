<script>
import { store } from '../data/store';
import axios from 'axios';
import Header from '../components/Header.vue';

export default {
  components: { Header },
  name: 'AdvancedSearch',
  data() {
    return {
      latitude: 40.803755,
      longitude: 14.198047,
      radius: 30,
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

  <Header/>

  <h3>Risultati per: <span class="">{{ store.inputText  }}</span></h3>

  <!-- Cards container -->
  <div class="container-card d-flex flex-wrap justify-content-center">

<!-- Single card -->
    <div
        class="boolbnb-card"
        v-for="apartment in arrSearch"
        :key="apartment.id">

        <img :src=" 'http://127.0.0.1:8000/storage/' +  apartment.cover_image ">
        <h3>{{ apartment.title }}</h3>
        <p>{{ apartment.address }}</p>
        <h6><strong>{{ apartment.price }} &euro;</strong> a notte</h6>

        <span><router-link :to="{name:'detailApartment', params:{slug:apartment.slug}}">Dettaglio</router-link></span>
        
    </div>

</div>

</template>


<style lang="scss" >
.container-card{
            width: 100%;
            height: 100%;
            .boolbnb-card{
                flex-basis: 20%;
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
</style>

