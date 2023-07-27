<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation} from 'swiper/modules';


export default {
  name:'partner',
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
          modules: [ Navigation, Autoplay, Pagination ]
        };
      },
}
</script>


<template>

  <div class="bg-partner">
      <div class="partner-container text-center">

        <h2>Partner</h2>
        
        <swiper
        :slidesPerView="4"
        :spaceBetween="0"
        :loop="true"
        :autoplay="{
          delay: 600,
          disableOnInteraction: false,
        }"
      :navigation="true"
      :modules="modules"
      class="mySwiper ">
      >
      <!-- 1 -->
      
      <swiper-slide>
        <div class="box-partner d-flex justify-content-center align-items-center">

            <img src="../../assets/partner/roma.png" alt="">
                            
        </div>
  </swiper-slide>

  <swiper-slide>
        <div class="box-partner d-flex justify-content-center align-items-center">

            <img src="../../assets/partner/napoli.png" alt="">
                            
        </div>
  </swiper-slide>

  <swiper-slide>
        <div class="box-partner d-flex justify-content-center align-items-center">

            <img src="../../assets/partner/inter.png" alt="">
                            
        </div>
  </swiper-slide>


  <swiper-slide>
        <div class="box-partner d-flex justify-content-center align-items-center">

            <img src="../../assets/partner/palermo.png" alt="">
                            
        </div>
  </swiper-slide>


  <swiper-slide> 
        <div class="box-partner d-flex justify-content-center align-items-center">

            <img src="../../assets/partner/roma.png" alt="">
                            
        </div>
  </swiper-slide>

  <swiper-slide>
        <div class="box-partner d-flex justify-content-center align-items-center">

            <img src="../../assets/partner/napoli.png" alt="">
                            
        </div>
  </swiper-slide>

  <swiper-slide>
        <div class="box-partner d-flex justify-content-center align-items-center">

            <img src="../../assets/partner/inter.png" alt="">
                            
        </div>
  </swiper-slide>

  <swiper-slide>
        <div class="box-partner d-flex justify-content-center align-items-center">

            <img src="../../assets/partner/palermo.png" alt="">
                            
        </div>
  </swiper-slide>

  



  
  

</swiper>
    </div>
  </div>

</template>



<style lang="scss" scoped>

.bg-partner{
  background-color: #f7f7f7;
  .partner-container{
    max-width: 1000px;
    margin: 0 auto;
    cursor: grab;

    h2{
      padding-top: 40px;
    }
    .box-partner{
      height: 200px;
      margin-right: 0px;
      //  background-color: red;
      //  border: 1px solid black;
       img{
        height: 120px;
        
       }
      }
    }
  }


</style>