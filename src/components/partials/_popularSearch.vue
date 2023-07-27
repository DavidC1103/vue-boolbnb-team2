
<script>
import { store } from '../../data/store';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

import { Navigation, Autoplay, Virtual } from 'swiper/modules';


export default {
  name:'popularSearch',
      components: {
          Swiper,
          SwiperSlide,
        },
        data(){
          return{
            store,
            cities: [
              {
                id: 1,
                name: 'Roma',
                image: 'roma.jpg'
              },
              {
                id: 2,
                name: 'Firenze',
                image: 'firenze.jpg'
              },
              {
                id: 3,
                name: 'Venezia',
                image: 'venezia.jpg'
              },
              {
                id: 4,
                name: 'Napoli',
                image: 'napoli.jpg'
              },
              {
                id: 5,
                name: 'Bologna',
                image: 'bologna.jpg'
              },
              {
                id: 6,
                name: 'Padova',
                image: 'padova.jpg'
              },
              {
                id: 7,
                name: 'Milano',
                image: 'milano.jpg'
              },
              {
                id: 8,
                name: 'Torino',
                image: 'torino.jpg'
              },
              {
                id: 9,
                name: 'Genova',
                image: 'genova.jpg'
              },
              {
                id: 10,
                name: 'Brescia',
                image: 'brescia.jpg'
              },
              {
                id: 11,
                name: 'Bari',
                image: 'bari.jpg'
              },
              {
                id: 12,
                name: 'Rimini',
                image: 'rimini.jpg'
              },
            ]
          }
      },
      setup(){
        return {
          modules: [ Navigation, Autoplay, Virtual ],
        };
      },

      methods:{
        getImage(img){
            return new URL(img, import.meta.url).href;
        },

        citytoSearch(cityName){
          store.inputText = cityName;
          this.$router.push({ name: "advanced-search", query: { city: cityName } });
        }
      }
}
</script>


<template>

  <h2 class="text-center">Città popolari </h2>

  <div class="container-fluid">

  

    <swiper
      :slidesPerView= "4"
      :spaceBetween="-360"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      
      <swiper-slide class="linear" 
      v-for="city in cities" 
      :key="city.id"
      >
        <div class="card-popular-search">
          <img :src="getImage(`../../assets/popularSearch/${city.image}`)" alt="">
        </div>
        <h3 @click="citytoSearch(city.name)">{{ city.name }}</h3>
      </swiper-slide>

    </swiper>
  </div>


</template>



<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;


h3{
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding-top: 20px;
  cursor: pointer;

  &:hover{
    color: $argentinian_blue;
  }

  &:active{
    color: $maize_yellow;
  }
}
h2{
  font-size: 2.5rem;
  margin-top: 50px;
  margin-bottom: 50px;
}

.card-popular-search{
  width: 300px;
  border-radius: 20px;
  overflow: hidden;
  img{
    width: 100%;
    border-radius: 20px;
    &:hover {
      filter: saturate(150%);
      cursor: grab;
    }
  }
}



</style>