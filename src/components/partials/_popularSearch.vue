
<script>

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
    
    <swiper-slide class="linear" v-for="city in cities" :key="city.id">
      <div class="card-popular-search">
        <img :src="getImage(`../../assets/popularSearch/${city.image}`)" alt="">
      </div>
      <h3 >{{ city.name }}</h3>
    </swiper-slide>

<!--     
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/firenze.jpg" alt="">
        <h3>Firenze</h3>
      </div>
    </swiper-slide>
    
    
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/venezia.jpg" alt="">
        <h3>Venezia</h3>
      </div>
    </swiper-slide>

    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/napoli.jpg" alt="">
        <h3>Napoli</h3>
      </div>
    </swiper-slide>
    
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/bologna.jpg" alt="">
        <h3>Bologna</h3>
      </div>
    </swiper-slide>

    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/padova.jpg" alt="">
        <h3>Padova</h3>
      </div>
    </swiper-slide>
    
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/milano.jpg" alt="">
        <h3>Milano</h3>
      </div>
    </swiper-slide>

    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/torino.jpg" alt="">
        <h3>Torino</h3>
      </div>
    </swiper-slide>
    
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/genova.jpg" alt="">
        <h3>Genova</h3>
      </div>
    </swiper-slide>

    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/brescia.jpg" alt="">
        <h3>Brescia</h3>
      </div>
    </swiper-slide>

    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/bari.jpg" alt="">
        <h3>Bari</h3>
      </div>
    </swiper-slide>

    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/rimini.jpg" alt="">
        <h3>Rimini</h3>
      </div>
    </swiper-slide> -->


  </swiper>
</div>

</template>



<style lang="scss" scoped>

.swiper-slide{
  cursor: grab;
}

h3{
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding-top: 20px;
}
h2{
  font-size: 2.5rem;
  margin-top: 50px;
  margin-bottom: 50px;
}

.card-popular-search{
  width: 360px;
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



</style>