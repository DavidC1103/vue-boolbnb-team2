<script>
import Header from '../components/Header.vue';
import team  from '../data/team'



export default{
    name: "AboutUs",
    components: {
        Header,
    },
    data(){
        return{
            team : team
        }
    },


}
</script>


<template>
  <div class="container-fluid">
    <div class="container-profile mb-5">
 
       <div class="card"
       v-for="profile in team"
       :key="profile.name">
         <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" class="card__image">
         <p class="card__name">{{ profile.name }}</p>
         <div>{{ profile.job }}</div>
         <ul class="social-icons">
           <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
           <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
         </ul>
         <div>Email : {{ profile.email }}</div>
       </div>
     </div>
  </div>

  

</template>



<style lang="scss">


</style>