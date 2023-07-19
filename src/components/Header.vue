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
                                <li class="nav-link"><a href="#evidenza">Home</a></li>
                                <li class="nav-link ps-4"><a href="">Appartamenti</a></li>
                                <li class="nav-link ps-4"><a href="">Contatti</a></li>
                                <li class="nav-link ps-4"><a href="">About Us</a></li>
                            </ul>
                        </div>
    
                        <div class="d-flex mb-0 navbar-menu mt-4 me-5">
                            <ul class="d-flex">
                                <li class="nav-link ps-4"><a href="">Login</a><span>|</span><a href="">Registrati</a><i class="fa-solid fa-globe"></i></li>
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
                i{
                    color: white;
                }
                &:hover{
                    transform: scale(1.1);
                    transition: all .3s;
                }
                a{
                    text-decoration: none;
                    color: white;
                    padding: 10px 15px;
                    border-radius: 20px;
                    font-size: 1.1rem;
                    font-weight: bold;
                    &:hover{
                        // color: #FDE74C;
                        color: #0a0f59;
                        transform: scale(1.1);
                    }
                }
                span{
                    font-size: 1.1rem;
                    color: white;
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
    background-color: #3fa9e4;
    
}

.shadow-header{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>