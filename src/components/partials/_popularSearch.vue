
<script>
import { store } from '../../data/store';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';


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
              {
                id: 13,
                name: 'Palermo',
                image: 'palermo.jpg'
              },
              {
                id: 14,
                name: 'Como',
                image: 'como.jpg'
              },
            ],
            swiperOptions: {
          breakpoints: {       
      320: {       
         slidesPerView: 2,
         spaceBetween: 220     
      },
      360: {       
         slidesPerView: 2,
         spaceBetween: 190     
      },    
      400: {       
         slidesPerView: 2,
         spaceBetween: 150     
      },
      450: {       
         slidesPerView: 2,
         spaceBetween: 100     
      }, 
      500: {       
         slidesPerView: 2,
         spaceBetween: 50     
      },              
      770: {       
         slidesPerView: 2,       
         spaceBetween: 50     
      },   
  
      771: {       
         slidesPerView: 4,       
         spaceBetween: 30     
      },
      1300: {       
         slidesPerView: 5,       
         spaceBetween: 270    
      },
      1400: {       
         slidesPerView: 5,       
         spaceBetween: 190    
      },
      1600: {       
         slidesPerView: 5,       
         spaceBetween: 10     
      },
      1800: {       
         slidesPerView: 7,       
         spaceBetween: 290     
      }  
   }   
        }
          }
      },
      setup(){
        return {
          modules: [ Navigation, Autoplay],
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
      :slidesPerView= "2"
      :spaceBetween="10"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="swiperOptions.breakpoints"
      :modules="modules"
      class="mySwiper"
    >
      
      <swiper-slide 
      v-for="city in cities" 
      :key="city.id"
      >
        <div class="card-popular-search" @click="citytoSearch(city.name)">
          <img :src="getImage(`../../assets/popularSearch/${city.image}`)" alt="">
          <h3>{{ city.name }}</h3>
        </div>
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

@media (min-width: 0 ) and (max-width: 575px){

h2{
    font-size: 1.6rem;
    margin: 20px 0px 25px 0px;
    
  }

  .card-popular-search{
  width: 250px;
  border-radius: 20px;
  overflow: hidden;
  img{
    width: 100%;
    border-radius: 20px;
    &:hover {
    filter: saturate(150%);
    
    }
  }
}

}



// ARROWS ANIMATION
.arrows {
	width: 60px;
	height: 72px;
	position: absolute;
	left: 80%;
	margin-left: -30px;
	bottom: 50%;
  transform: rotate(270deg);
}

.arrows path {
	stroke: #3fa9e4;
	fill: transparent;
	stroke-width: 1px;	
	animation: arrow 2s infinite;
	-webkit-animation: arrow 2s infinite; 
}

@keyframes arrow
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

@-webkit-keyframes arrow /*Safari and Chrome*/
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

.arrows path.a1 {
	animation-delay:-1s;
	-webkit-animation-delay:-1s; /* Safari 和 Chrome */
}

.arrows path.a2 {
	animation-delay:-0.5s;
	-webkit-animation-delay:-0.5s; /* Safari 和 Chrome */
}

.arrows path.a3 {	
	animation-delay:0s;
	-webkit-animation-delay:0s; /* Safari 和 Chrome */
}
</style>