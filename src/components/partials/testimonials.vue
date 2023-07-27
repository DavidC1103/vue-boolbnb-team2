<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';


export default {
  name:'testimonials',
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
          modules: [EffectFade, Navigation, Pagination, Autoplay],
        };
      },
}
</script>

<template>
<swiper
    :spaceBetween="30"
    :effect="'fade'"
    :navigation="true"
    :loop="true"
    :autoplay="{
      delay: 3500,
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
    <div class="background-testimonials d-flex align-items-center justify-content-center">
      
        <div class="box-image">
          <img src="../../assets/testimonials/new-martina.jpg" />
        </div>
        <div class="description">
          <img src="../../assets/testimonials/quote.png" alt="">
          <p>Ho trovato una bella stanza e la mia prenotazione è stata accettata pochi minuti dopo averla inviata.</p>
          <p class="last">- New Martina, Napoli</p>
        </div>
  
    </div> 
  </swiper-slide>

  <!-- 2 -->
  <swiper-slide>
    <div class="background-testimonials d-flex align-items-center justify-content-center">
      
        <div class="box-image">
          <img src="../../assets/testimonials/victor.jpg" />
        </div>
  
        <div class="description">
          <img src="../../assets/testimonials/quote.png" alt="">
          <p>Prenota anche tu su BoolBnB!</p>
          <p class="last">- Victor, Napoli</p>
        </div>
    </div> 
    
  </swiper-slide>

  <!-- 3 -->
  <swiper-slide>
    <div class="background-testimonials d-flex align-items-center justify-content-center">
      
        <div class="box-image">
          <img src="../../assets/testimonials/lorenzo.jpg" />
        </div>
  
        <div class="description">
          <img src="../../assets/testimonials/quote.png" alt="">
          <p>modalità di prenotazione molto chiara e veloce, approvato!</p>
          <p class="last">- Lorenzo, Roma</p>
        </div>
    </div> 
    
  </swiper-slide>

  </swiper>


</template>


<style lang="scss" scoped>

.swiper{
  margin-bottom: 100px;
}


.background-testimonials{
  height: 100%;
  background-color: #f7f7f7;
  padding: 60px 0;
  margin-top: 80px;
  .box-image{
    width: 600px;
    margin-right: 40px;
    img{
      width: 100%;
    }
  }
  .description{
    width: 500px;
    img{
      width: 40px;
    }
    p{
      padding-top: 40px;
      font-size: 30px;
      font-weight: 500;
      &:last-of-type{
        font-size: 18px;
      }
    }
  }
}

@media (min-width: 0 ) and (max-width: 575px){

  .background-testimonials{
  height: 10%;
  background-color: #f7f7f7;
  flex-direction: column;
  padding: 0;
  margin: 0;
  .box-image{
    width: 70%;
    margin-right: 0px;
    img{
      width: 100%;
    }
  }
  .description{
    width: 70%;
    padding-bottom: 50px;

    img{
      width: 18px;
    }
    p{
      padding-top: 10px;
      font-size: 1rem;
      font-weight: 500;
      &:last-of-type{
        font-size: 0.6rem;
        padding-bottom: 20px;
      }
    }
  }
}
}

.xsm-none{
  display: none;
}

</style>