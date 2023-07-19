<script>
export default {
  data(){
        name:'testimonials'
        return{
    
        }
    }
}
</script>

<template>
  
  <div class="background-testimonials d-flex justify-content-center align-items-center">
    
      <div class="box-image">
        <img src="../../assets/testimonials/testimonials.jpg" alt="">
      </div>

      <div class="description">
        <img src="../../assets/testimonials/quote.png" alt="">
        <p>Ho trovato una bella stanza e la mia prenotazione è stata accettata pochi minuti dopo averla inviata.</p>
        <p>- Alessia, Napoli</p>
      </div>
  </div>
  

</template>


<style lang="scss" scoped>
.background-testimonials{
  height: 500px;
  background-color: #f7f7f7;
  margin-bottom: 65px;
  .box-image{
    height: 350px;
    margin-right: 40px;
    img{
      height: 100%;
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
</style>