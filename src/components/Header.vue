<script>
    export default {
        data(){
            name:'Header'
            return{

            }
        }
    }
</script>


<template>

    <header>
        <div class="container h-100">
            <nav class="d-flex justify-content-between align-items-center h-100">
                
                    <div class="hamburger-menu">
                        <input id="menu__toggle" type="checkbox" />
                        <label class="menu__btn" for="menu__toggle">
                        <span></span>
                        </label>

                        <ul class="menu__box">
                            <li><a class="menu__item" href="#">In Evidenza</a></li>
                            <li><a class="menu__item" href="#">Appartamenti</a></li>
                        </ul>
                    </div>
                    
                    <div class="logo-mixin">
                        <img src="../assets/logo-boolbnb/boolbnb_1500x750.png" alt="" class="logo">
                    </div>

                    <ul class="d-flex mb-0 navbar-menu">
                        <li><a href="">In Evidenza</a></li>
                        <li class="ps-4"><a href="">Appartamenti</a></li>
                        <li class="ps-4"><a href="">Boh</a></li>
                        <li class="ps-4"><a href="">Suca</a></li>
                    </ul>

                    <ul class="d-flex mb-0 navbar-menu">
                        <li class="ps-2"><a href="">Login</a></li>
                        <li class="ps-2"><a href="">Registrati</a></li>
                    </ul>
            </nav>
        </div>
    </header>
  
</template>


<style lang="scss">
@use '../scss/main.scss' as *;
header{
    background-color: rgb(61, 61, 61);
    height: 70px;
    nav{
        img.logo{
            width: 120px;
        }
        ul{
            li{
                list-style: none;
                a{
                    text-decoration: none;
                }
            }
        }
    }
}


</style>