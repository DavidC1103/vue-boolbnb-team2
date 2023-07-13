<script>
export default {
    data(){
        name:'jumbotron'
        return{
    
        }
    }
}
</script>

<template>
    <div class="boolbnb-jumbotron">
        <div class="jumbo-content">
            <h1>BoolBnB</h1>
            <div class="jumbo-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque sapiente quaerat dolore, voluptatem corrupti maxime aut dolorem odit iste, modi beatae illo corporis quibusdam minima optio quis! Omnis, quos quam!</div>
        </div>
        <div class="jumbo-faded"></div>
    </div>
  
</template>

<style lang="scss">
.boolbnb-jumbotron{
    background-image: url('../../assets/jumbotron/taiwan-2699628.jpg');
    background-size: cover;
    background-position: center;
    height: 650px;
    color: rgb(5, 5, 5);
    .jumbo-content{
        margin-left: 300px;
        padding-top: 140px;
        height: 200px;
        h1{
            font-size: 4rem;
            font-weight: bold;
            padding-bottom: 0.4rem;
        }
    }
    .jumbo-desc{
        line-height: 1.8rem;
        padding-top: 1rem;
        font-size: 1rem;
        max-width: 500px;
        height: 180px;
    }
    .jumbo-faded{
        margin-top: 338px;
        height: 7rem;
        background-image: linear-gradient(180deg, transparent, rgba(202, 202, 202, 0.61),#fff);
    }
}

</style>