<script>
import Header from '../components/Header.vue';
import team from '../data/team'



export default{
    name: "AboutUs",
    components: {
        Header,
    },
    data(){
        return{
            team
        }
    },


}
</script>


<template>
   <div class="container-profile mb-5">

      <div class="card"
      v-for="profile in team"
      :key="profile.name">
        <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" class="card__image">
        <p class="card__name">{{ profile.name }}</p>
        <div>{{ profile.job }}</div>
        <ul class="social-icons">
          <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-codepen"></i></a></li>
        </ul>
      </div>

      <div class="card">
        <img src="https://lh3.googleusercontent.com/oUUiPB9sq3ACq4bUaRmo8pgvC4FUpRRrQKcGIBSOsafawZfRpF1vruFeYt6uCfL6wGDQyvOi6Ez9Bpf1Fb7APKjIyVsft7FLGR6QqdRFTiceNQBm1In9aZyrXp33cZi9pUNqjHASdA=s170-no" alt="Person" class="card__image">
        <p class="card__name">David Salvatore Calaiò</p>
        <div>Jr. Full-Stack Web Developer</div>
        <ul class="social-icons">
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-codepen"></i></a></li>
        </ul>
      </div>


      <div class="card">
        <img src="https://lh3.googleusercontent.com/pZwZJ5HIL5iKbA91UGMUIPR0VJWa3K0vOGzDZmY6wU3EJBUdfsby3VEyxU162XxTyOyP3D154tjkr-4Jgcx8lygYUR8eB-jVmld4dsHi1c-mE_A8jKccseAG7bdEwVrcuuk6ciNtSw=s170-no" alt="Person" class="card__image">
        <p class="card__name">Bianca Serrano</p>
        <div>Jr. Full-Stack Web Developer</div>
        <ul class="social-icons">
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-codepen"></i></a></li>
        </ul>
      </div>
      <div class="card">
        <img src="https://lh3.googleusercontent.com/pZwZJ5HIL5iKbA91UGMUIPR0VJWa3K0vOGzDZmY6wU3EJBUdfsby3VEyxU162XxTyOyP3D154tjkr-4Jgcx8lygYUR8eB-jVmld4dsHi1c-mE_A8jKccseAG7bdEwVrcuuk6ciNtSw=s170-no" alt="Person" class="card__image">
        <p class="card__name">Bianca Serrano</p>
        <div>Jr. Full-Stack Web Developer</div>
        <ul class="social-icons">
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-codepen"></i></a></li>
        </ul>
      </div>
      <div class="card">
        <img src="https://lh3.googleusercontent.com/pZwZJ5HIL5iKbA91UGMUIPR0VJWa3K0vOGzDZmY6wU3EJBUdfsby3VEyxU162XxTyOyP3D154tjkr-4Jgcx8lygYUR8eB-jVmld4dsHi1c-mE_A8jKccseAG7bdEwVrcuuk6ciNtSw=s170-no" alt="Person" class="card__image">
        <p class="card__name">Bianca Serrano</p>
        <div>Jr. Full-Stack Web Developer</div>
        <ul class="social-icons">
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-codepen"></i></a></li>
        </ul>
      </div>

    </div>

  

</template>



<style lang="scss">


</style>