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
  <Header class="header-bg"/>
  <div class="container-fluid ">
    <div class="container-profile">
        <h2 class="text-center pb-5"><span>OUR</span> TEAM</h2>
        <div class="d-flex justify-content-around align-items-center flex-wrap">
       <div class="card"
       v-for="profile in team"
       :key="profile.name">
         <img :src="profile.image">
         <p class="card__name">{{ profile.name }}</p>
         <div>{{ profile.job }}</div>
         <ul class="social-icons">
           <li><a :href="profile.link"><i class="fa-brands fa-github"></i></a></li>
           <li><a :href="profile.link2"><i class="fa-brands fa-linkedin"></i></a></li>
         </ul>
         <div class="email">Email : {{ profile.email }}</div>
       </div>
      </div>
     </div>
  </div>

  

</template>



<style lang="scss" scoped>
.card {
  img{
    overflow: hidden;
    border-radius: 50%;
    border: 3px solid #FDE74C;
    margin-top: 5px;
  }
}
.social-icons{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #777777;
    //debug
    // border: 1px solid green;
}
.social-icons a{
  color: #777777;
}
.social-icons a:hover{
  color: #000;
}
.social-icons a i{
    // box-shadow: rgb(0 0 0 / 8%) 0px 4px 12px;
    // padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 3px;
    color: #3D40F5;
    font-size: 16px;
    margin-right: 12px;
    //debug
    // border: 1px solid red;
}

.container-fluid{
  background-color: #ffffff09;
}

@media (min-width: 0 ) and (max-width: 950px){

  .card{
    margin-top: 20px;
  }


}

</style>