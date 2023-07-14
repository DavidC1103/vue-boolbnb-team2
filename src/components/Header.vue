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

    <header id="nav" class=" d-flex align-items-center">
        <div class="container-fluid h-100 align-items-center">
            <nav class="d-flex align-items-center h-100">
                
                    <div class="hamburger-menu">
                        <input id="menu__toggle" type="checkbox" />
                        <label class="menu__btn" for="menu__toggle">
                        <span></span>
                        </label>
                        <ul class="menu__box">
                            <li><a class="menu__item" href="#evidenza">In Evidenza</a></li>
                            <li><a class="menu__item" href="#">Appartamenti</a></li>
                        </ul>
                    </div>
                    
                    <div class="d-flex justify-content-between w-100 logo-container">

                        <div class="logo-mixin">
                            <img src="../assets/logo-boolbnb/1.png" alt="" class="logo ms-5 mt-2">
                        </div>
    
                        <div class="d-flex mb-0 mt-4">
                            <ul class="navbar-menu d-flex">
                                <li class="nav-link"><a href="#evidenza">In Evidenza</a></li>
                                <li class="nav-link ps-4"><a href="">Appartamenti</a></li>
                                <li class="nav-link ps-4"><a href="">Contatti</a></li>
                                <li class="nav-link ps-4"><a href="">About Us</a></li>
                            </ul>
                        </div>
    
                        <div class="d-flex mb-0 navbar-menu mt-4 me-5">
                            <ul class="d-flex">
                                <li class="nav-link ps-4"><a href="">Login</a></li>
                                <li class="nav-link ps-4"><a href="">Registrati</a></li>
                            </ul>
                        </div>
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
    width: 100%;
    height: 80px;
    //debug
    // background-color: lightcoral;
    nav{
        img.logo{
            width: 120px;
        }
        ul{
            li{
                list-style: none;
                &:hover{
                    transform: scale(1.1);
                    transition: all .3s;
                }
                a{
                    text-decoration: none;
                    color: darken($color: #FDE74C, $amount: 20%);
                    background-color: #0A0F59;
                    padding: 10px 15px;
                    border-radius: 20px;
                    &:hover{
                        // color: #FDE74C;
                        transform: scale(1.1);
                    }
                }
            }
        }
        
    }
}
//
// TODO: SISTEMARE COLORI CON VARIABILI SETTATE DA MARCOCNC

//
.nav-link{
    &:hover{
        color: #0A0F59;
        cursor: pointer;
    }
    &::after{
        display: block;
        content: '';
        margin: 0 auto;
        width: 0;
        height: 2px;
        background-color: #FDE74C;
        transition: width 0.3s;
    }
    &:hover::after{
        width: 100%;
    }

}
.header-bg{
    background-color: #35a7ff61;
    
}
</style>