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
        },
        mounted() {
        },
    }
</script>


<template>

    <header id="nav" class="container-fluid">

        <div class="wrapper d-flex justify-content-sm-between">

            <nav>
                <!-- Logo -->
                <div class="logo-mixin">
                    <img class="logo" src="../assets/logo-boolbnb/1.png" alt="logo_boolbnb" href="#">
                </div>
                
                <!-- Header links -->
                <div class="menu-center d-none d-md-block">
                    <ul>
                        <li class="item-link"><router-link :to='{ name: "home"}'>Home</router-link></li>
                        <li class="item-link ps-4"><router-link :to='{ name: "advanced-search"}'>Ricerca Avanzata</router-link></li>
                        <li class="item-link ps-4"><router-link :to='{ name: "about-us"}'>Chi siamo</router-link></li>
                    </ul>
                </div>
                
                <!-- Login - Register links -->
                <div class="right-menu d-none d-md-block">
                    <ul>
                        <li class="item-link ps-4"> <a href="http://127.0.0.1:8000/login-register">Login</a> <span>|</span> <a href="http://127.0.0.1:8000/login-register">Registrati</a> <i class="fa-solid fa-globe"></i></li>
                    </ul>
                </div>

                <!-- Hamburger menù -->
                <div class="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                    <span></span>
                    </label>
                    <ul class="menu__box">

                        <li>
                            <router-link class="menu__item" :to='{ name: "home"}'>Home</router-link>
                        </li>
                        <li>
                            <router-link class="menu__item" :to='{ name: "advanced-search"}'>Ricerca Avanzata</router-link>
                        </li>
                        <li>
                            <router-link class="menu__item" :to='{ name: "about-us"}'>Chi siamo</router-link>
                        </li>
                        <li>
                            <a class="menu__item" href="http://127.0.0.1:8000/login-register">Login</a>
                        </li>
                        <li>
                            <a class="menu__item" href="http://127.0.0.1:8000/login-register">Registrati</a>
                        </li>

                    </ul>
                </div>
                <!-- End Hamburger menù -->
            </nav>
        </div>
    </header>
</template>


<style lang="scss">
@use '../scss/main.scss' as *;

header {
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 9999;
    top: 0;
    width: 100%;
    height: 80px;
    animation: ease-in;
    transition: all 0.3s;
    .wrapper {
        width: 100%;
        height: 100%;
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;

            .logo-mixin {
                display: flex;
                align-items: center;
                height: 100%;
                img{
                    width: 120px;
                    cursor: pointer;
                }
            }
            .menu-center {
                display: flex;
                align-items: center;
                height: 100%;
                ul{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    padding-left: 0 !important;
                    li{
                        list-style: none;
                        padding: 10px 15px;
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
                            font-size: 1.1rem;
                            font-weight: bold;
                            &:hover{
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
            .right-menu {
                display: flex;
                align-items: center;
                height: 100%;
                ul{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    padding-left: 0 !important;
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
                            font-size: 1.1rem;
                            font-weight: bold;

                            &:hover{
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
    }
}

.item-link{
    &:hover{
        cursor: pointer;
    }
    &::after{
        display: block;
        content: '';
        margin: 0 auto;
        width: 0;
        height: 2px;
        background-color: $maize_yellow;
        transition: all 0.3s;
    }
    &:hover::after{
        width: 90%;
    }

}
.header-bg{
    background: rgb(12,16,240);
    background: -moz-linear-gradient(339deg, rgb(12, 16, 240) 0%, rgb(53, 167, 255) 100%);
    background: -webkit-linear-gradient(339deg, rgba(12,16,240,1) 0%, rgba(53,167,255,1) 100%);
    background: linear-gradient(339deg, rgba(12,16,240,1) 0%, rgba(53,167,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0c10f0",endColorstr="#35a7ff",GradientType=1); 
}

.shadow-header{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

//////////////////////// MEDIA QUERIES /////////////////////////

@media (min-width: 0 ) and (max-width: 577px){

    header {
        width: 90%;

        .menu__box{
            width: 180px !important;
            background: rgb(76,79,238);
            background: -moz-linear-gradient(180deg, rgba(76,79,238,1) 13%, rgba(12,16,240,1) 28%, rgba(53,167,255,1) 100%);
            background: -webkit-linear-gradient(180deg, rgba(76,79,238,1) 13%, rgba(12,16,240,1) 28%, rgba(53,167,255,1) 100%);
            background: linear-gradient(180deg, rgba(27, 73, 245, 1) 13%, rgba(12,16,240,1) 28%, rgba(53,167,255,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4c4fee",endColorstr="#35a7ff",GradientType=1);
            .menu__item{
                font-size: 16px !important;
                padding: 10px 15px !important;
                &:hover{
                    background-color: $argentinian_blue;
                }

            }
            li{
                a{
                    color: $federal_blue;
                }
            }
        }
        .logo-container {
            display: flex;
            justify-content: center !important;

            .logo-mixin{
                .logo {
                    display: flex;
                    align-self: flex-end;
                    width: 100px;
                    margin-bottom: 10px;
                }
            }
        }
    }
}
</style>