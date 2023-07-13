<script>
import jumbotron from './partials/jumbotron.vue'
    export default{
        name:'Header',
        components: {
            jumbotron
        },
        data(){

            return{

            }
        }
    }
</script>


<template>

    <header class="w-100">
        <div class="container-fluid h-100 w-100">
            <nav class="d-flex align-items-center justify-content-between h-100">
                
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
                        <img src="../assets/logo-boolbnb/1.png" alt="" class="logo ms-5 mt-2">
                    </div>

                    <div class="d-flex mb-0 mt-4">
                        <ul class="navbar-menu d-flex">
                            <li class="nav-link"><a href="">In Evidenza</a></li>
                            <li class="nav-link ps-4"><a href="">Appartamenti</a></li>
                            <li class="nav-link ps-4"><a href="">Boh</a></li>
                            <li class="nav-link ps-4"><a href="">Suca</a></li>
                        </ul>
                    </div>

                    <div class="d-flex mb-0 navbar-menu justify-content-end mt-4 register me-5">
                        <ul class="d-flex">
                            <li class="ps-2"><a href="">Login</a></li>
                            <li class="ps-2"><a href="">Registrati</a></li>
                        </ul>
                    </div>
            </nav>
        </div>
    </header>

    <jumbotron class="jumbo"/>

  
</template>


<style lang="scss">
@use '../scss/main.scss' as *;
header{
    position: fixed;
    z-index: 9999;
    top: 0;
    nav{
        img.logo{
            width: 120px;
        }
        ul{
            li{
                list-style: none;
                &:hover{
                    transform: scale(1.20);
                }
                a{
                    text-decoration: none;
                    color: rgb(226, 180, 28);
                    &:hover{
                        color: rgb(23, 23, 254);
                        transform: scale(1.20);
                    }
                }
            }
        }
        
    }
}

.nav-link{
    &:hover{
        color: $orange;
        cursor: pointer;
    }
    &::after{
        display: block;
        content: '';
        margin: 0 auto;
        width: 0;
        height: 2px;
        background-color: $orange;
        transition: width 0.3s;
    }
    &:hover::after{
        width: 100%;
    }

}

</style>