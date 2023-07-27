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

    <header id="nav" class="container-fluid">

        <div class="wrapper d-flex justify-content-sm-between">

            <nav>

                <div class="logo-mixin">
                    <img class="logo" src="../assets/logo-boolbnb/1.png" alt="logo_boolbnb" >
                </div>
                
                <div class="menu-center d-none d-md-block">
                    <ul>
                        <li class="item-link"><router-link :to='{ name: "home"}'>Home</router-link></li>
                        <li class="item-link ps-4"><router-link :to='{ name: "advanced-search"}'>Ricerca Avanzata</router-link></li>
                        <li class="item-link ps-4"><router-link :to='{ name: "about-us"}'>Chi siamo</router-link></li>
                    </ul>
                </div>
                
                <div class="right-menu d-none d-md-block">
                    <ul>
                        <li class="item-link ps-4"> <a href="http://127.0.0.1:8000/login-register">Login</a> <span>|</span> <a href="http://127.0.0.1:8000/login-register">Registrati</a> <i class="fa-solid fa-globe"></i></li>
                    </ul>
                </div>

                <div class="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                    <span></span>
                    </label>
                    <ul class="menu__box">
                        <li><a class="menu__item" href="#evidenza">In Evidenza</a></li>
                        <li><a class="menu__item" href="#">Ricerca Avanzata</a></li>
                        <li><a class="menu__item" href="#">Login</a></li>
                    </ul>
                </div>
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
    transition: all 0.3s ease;
    .wrapper {
        width: 100%;
        height: 100%;
        //debug
        // border: 1px solid red;
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;
            //debug
            // border: 2px solid purple;
            .logo-mixin {
                display: flex;
                align-items: center;
                height: 100%;
                //debug
                // border: 1px solid gold;
                img{
                    width: 120px;
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
                    //debug
                    // border: 1px solid green;
                    li{
                        // display: flex;
                        // justify-content: center;
                        // align-items: center;
                        // width: 100%;
                        // height: 100%;
                        list-style: none;
                        //debug
                        // border: 1px solid black;
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
                            // padding: 10px 10px;
                            // border-radius: 20px;
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
                    //debug
                    // border: 1px solid blue;
                    li{
                        // display: flex;
                        // justify-content: center;
                        // align-items: center;
                        // width: 100%;
                        // height: 100%;
                        list-style: none;
                        //debug
                        // border: 1px solid black;
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
                            // padding: 10px 10px;
                            // border-radius: 20px;
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
    }
}
//
// TODO: SISTEMARE COLORI CON VARIABILI SETTATE DA MARCOCNC
//
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
        background-color: #FDE74C;
        transition: all 0.3s;
    }
    &:hover::after{
        width: 90%;
    }

}
.header-bg{
    background-color: #3fa9e4;
    
}

.shadow-header{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

//////////////////////// MEDIA QUERIES /////////////////////////

@media (min-width: 0 ) and (max-width: 577px){

    header {
        width: 90%;
        //debug
        // border: 2px solid black;
        .menu__box{
            width: 180px !important;
            background-color: #3fa9e4 !important;
            .menu__item{
                font-size: 16px !important;
            }
            li{
                a{
                    color: #ffffff;
                }
            }
        }
        .logo-container {
            display: flex;
            justify-content: center !important;
            //debug
            // border: 1px solid green;
            // background-color: #FDE74C;
            .logo-mixin{
                //debug
                // border: 1px solid green;
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