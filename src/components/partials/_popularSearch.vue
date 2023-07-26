
<script>

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
      
          }
      },
      setup(){
        return {
          modules: [ Navigation, Autoplay ]
        };
      },
}
</script>


<template>

  <h2 class="text-center">Città popolari </h2>

  <div class="container-fluid">

  
<swiper
    :slidesPerView="4"
    :spaceBetween="-360"
    :loop="true"
    :autoplay="{
      delay: 1500,
      disableOnInteraction: true,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <!-- 1 -->
    <swiper-slide>
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/roma.jpg" alt="">
      </div>
      <h3>Roma</h3>
    </swiper-slide>

    <!-- 2 -->
    <swiper-slide>
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/firenze.jpg" alt="">
        <h3>Firenze</h3>
      </div>
    </swiper-slide>
    
    <!-- 3 -->
    <swiper-slide>
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/venezia.jpg" alt="">
        <h3>Venezia</h3>
      </div>
    </swiper-slide>

    <!-- 4 -->
    <swiper-slide>
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/napoli.jpg" alt="">
        <h3>Napoli</h3>
      </div>
    </swiper-slide>
    
    <!-- 5 -->
    <swiper-slide>
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/bologna.jpg" alt="">
        <h3>Bologna</h3>
      </div>
    </swiper-slide>

    <!-- 6 -->
    <swiper-slide>
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/padova.jpg" alt="">
        <h3>Padova</h3>
      </div>
    </swiper-slide>
    
    <!-- 7 -->
    <swiper-slide>
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/milano.jpg" alt="">
        <h3>Milano</h3>
      </div>
    </swiper-slide>

    <!-- 8 -->
    <swiper-slide>
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/torino.jpg" alt="">
        <h3>Torino</h3>
      </div>
    </swiper-slide>
    
    <!-- 9 -->
    <swiper-slide>
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/genova.jpg" alt="">
        <h3>Genova</h3>
      </div>
    </swiper-slide>

    <!-- 10 -->
    <swiper-slide>
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/brescia.jpg" alt="">
        <h3>Brescia</h3>
      </div>
    </swiper-slide>

    <!-- <swiper-slide>
      <div class="card-popular-search">
        <img src="" alt="">
      
      </div>
    </swiper-slide> -->

  </swiper>
</div>

</template>



<style lang="scss" scoped>



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
    cursor: pointer ;
    &:hover {
    filter: saturate(150%);
    
    }
  }
}

.first{
  margin-left: 250px;
}

</style>