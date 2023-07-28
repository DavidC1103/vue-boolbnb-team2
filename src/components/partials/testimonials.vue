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
            testimonials: [
              {
                id: 1,
                name: '- New Martina, Napoli',
                image: 'new-martina.jpg',
                text: "Ho trovato una bella stanza e la mia prenotazione è stata accettata pochi minuti dopo averla inviata."
              },
              {
                id: 2,
                name: '- Lorenzo, Roma',
                image: 'lorenzo.jpg',
                text: "Modalità di prenotazione molto chiara e veloce, approvato!"
              },
              {
                id: 3,
                name: '- Victor, Napoli',
                image: 'victor.jpg',
                text: "Prenota anche tu su BoolBnB!"
              }
            ],
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
  <div class="background-testimonials ">
<swiper
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
  <swiper-slide
  v-for="testimonial in testimonials" 
  :key="testimonial.id"
  >
      <div class="bg d-flex justify-content-center align-items-center">
        <div class="box-image">
          <img :src="'../../src/assets/testimonials/' + testimonial.image" alt="" />
        </div>
        <div class="description text-center">
          <img src="../../assets/testimonials/quote.png" alt="">
          <p>{{testimonial.text}}</p>
          <p class="last">{{testimonial.name}}</p>
        </div>
      </div>
  </swiper-slide>
    
  </swiper>
</div> 

</template>


<style lang="scss" scoped>

.swiper{
  margin-bottom: 100px;
}

.bg{
  background-color: #f7f7f7;
}

.background-testimonials{
  height: 100%;
  background-color: #f7f7f7;
  padding: 40px 0;
  margin-top: 60px;
  margin-bottom: 60px;

  .box-image{
    width: 600px;
    margin-right: 40px;
    img{
      width: 100%;
    }
  }
  .description{
    width: 500px;
    background-color: #f7f7f7;
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
  
  

  .swiper{
  margin-bottom: 5px !important;
}
  .background-testimonials{
  height: 100%;
  background-color: #f7f7f7;
  flex-direction: column;
  margin-top: 40px !important;
  margin-bottom: 60px !important;
  padding-bottom: 0px;
  padding-top: 40px;
  .box-image{
    width: 70%;
    margin-right: 0px;
    img{
      width: 100%;
    }
  }
  .description{
    width: 70%;
    height: 100%;
    padding-bottom: 30px;
    font-style: italic;
    font-family: 'Borel', cursive;
    background-color: #f7f7f7;
    img{
      width: 18px;
      padding-top: 10px;
    }
    p{
      padding-top: 10px;
      font-size: 1rem;
      font-weight: 500;
      &:last-of-type{
        font-size: 0.6rem;
        padding-bottom: 0px;
      }
    }
  }
}
.d-flex{
  display: flex;
  flex-direction: column;
  align-items: center;
}
}

.xsm-none{
  display: none;
}

</style>