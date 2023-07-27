
<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import 'swiper/css/effect-cards';

import { Navigation, Autoplay, Virtual, EffectCards } from 'swiper/modules';


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
          modules: [ Navigation, Autoplay, Virtual, EffectCards ]
        };
      },
}
</script>


<template>

  <h2 class="text-center">Città popolari </h2>

  <div class="container-fluid">

  
<swiper
    :slidesPerView= "1"
    :spaceBetween="10"
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
        <svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
      </div>
      <h3>Roma</h3>
    </swiper-slide>

    <!-- 2 -->
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/firenze.jpg" alt="">
        <svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
        <h3>Firenze</h3>
      </div>
    </swiper-slide>
    
    <!-- 3 -->
    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/venezia.jpg" alt="">
        <svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
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

    <swiper-slide class="linear">
      <div class="card-popular-search">
        <img src="../../assets/popularSearch/palermo.jpg" alt="">
        <h3>Palermo</h3>
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

.xsm-none{
    display: none;
}

.swiper-slide{
  margin-right: 500px;
}

@media (min-width: 330px ) and (max-width: 360px){

.swiper-slide{
    margin-right: 10px !important;
    
}
}





.arrows {
	width: 60px;
	height: 72px;
	position: absolute;
	left: 88%;
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