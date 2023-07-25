
<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


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
          modules: [ Navigation ]
        };
      },
}
</script>


<template>

  <h2>Città popolari </h2>

<swiper
    :slidesPerView="5"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <!-- 1 -->
    <swiper-slide class="first">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/roma.jpg" alt="">
        <h3>Roma</h3>
      </div>
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

</swiper>

</template>



<style lang="scss" scoped>
h3{
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding-top: 20px;
}
h2{
  margin-left: 250px;
  margin-top: 50px;
  margin-bottom: 50px;
}

card-popular-search{
  width: 300px;
  background-color: red;
  border-radius: 20px;
  overflow: hidden;
}

.first{
  margin-left: 250px;
}
.swiper-slide{
  width: 300px;
  cursor: pointer;
  &:hover img{
    filter: saturate(150%);
    
  }
  img{
    width: 100%;
    border-radius: 20px;
  }
}
</style>