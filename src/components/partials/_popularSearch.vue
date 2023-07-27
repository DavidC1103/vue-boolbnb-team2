
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
      
          }
      },
      setup(){
        return {
          modules: [ Navigation, Autoplay, Virtual ]
        };
      },
}
</script>


<template>

  <h2 class="text-center">Città popolari </h2>

  <div class="container-fluid">

  
<swiper
    :slidesPerView= "4"
    :spaceBetween="-610"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <!-- 1 -->
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/roma.jpg" alt="">
      </div>
      <h3>Roma</h3>
    </swiper-slide>

    <!-- 2 -->
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/firenze.jpg" alt="">
        <h3>Firenze</h3>
      </div>
    </swiper-slide>
    
    <!-- 3 -->
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/venezia.jpg" alt="">
        <h3>Venezia</h3>
      </div>
    </swiper-slide>

    <!-- 4 -->
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/napoli.jpg" alt="">
        <h3>Napoli</h3>
      </div>
    </swiper-slide>
    
    <!-- 5 -->
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/bologna.jpg" alt="">
        <h3>Bologna</h3>
      </div>
    </swiper-slide>

    <!-- 6 -->
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/padova.jpg" alt="">
        <h3>Padova</h3>
      </div>
    </swiper-slide>
    
    <!-- 7 -->
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/milano.jpg" alt="">
        <h3>Milano</h3>
      </div>
    </swiper-slide>

    <!-- 8 -->
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/torino.jpg" alt="">
        <h3>Torino</h3>
      </div>
    </swiper-slide>
    
    <!-- 9 -->
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/genova.jpg" alt="">
        <h3>Genova</h3>
      </div>
    </swiper-slide>

    <!-- 10 -->
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
    </swiper-slide>


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
  width: 300px;
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