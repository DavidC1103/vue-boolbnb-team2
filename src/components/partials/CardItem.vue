<script>
import { store } from '../../data/store';

export default {
    name: 'CardItem',

    props:{
        img : String,
        title : String,
        address: String,
        price : String,
        sponsored: Number
    }
}
</script>

<template>
    <!-- Single card -->
    <div
        class="boolbnb-card"
        >
        <img :src="img">
        <i v-if="sponsored" class="sponsored fa-solid fa-star" title="In Evidenza"></i>
        <div class="description-card">
            <h3>{{ title }}</h3>
            <p>{{ address }}</p>
            <h5>
                <strong>{{ price }} &euro;</strong>
                <span>/ notte</span>
            </h5>
        </div>

    </div>
    
</template>


<style lang="scss" scoped> 
@use '../../scss/partials/vars' as *;
    .boolbnb-card{
        position: relative;
        border-radius: 15px;
        flex-basis: 100%;
        margin: 20px 20px;
        box-shadow: rgba(200, 200, 200, 0.5) 0px 0px 0.5rem 0px;
        overflow: hidden;
        &:hover {
            box-shadow: 0 0.5em 0.5em -0.4em rgba(200, 200, 200, 0.5);
            background-size: 100% 100%;
            transform: translateY(-0.15em);
        }
        .sponsored {
            position: absolute;
            top: 5%;
            right: 5%;
            color: $federal_blue;
            padding: .5rem;
            background: $lightsky_blue;
            border-radius: .5rem;
        }
        // &:nth-child(3n+2){
        //     animation: fade-top 1s ease-in;

        //     @keyframes fade-top {
        //             0% {
        //             transform: translateY(100px);
        //             opacity: 0;
        //             }
        //             100% {
        //             transform: translateY(0);
        //             opacity: 1;
        //             }
        //         }
        // }

        // &:nth-child(3n+3){
        //     animation: fade-right 1s ease-in;

        //     @keyframes fade-right {
        //         0% {
        //         transform: translateX(100px);
        //         opacity: 0;
        //         }
        //         100% {
        //         transform: translateX(0);
        //         opacity: 1;
        //         }
        //     }
        // }

        &:hover{
            cursor: pointer;
        }

        &:hover img{
            width: 103%;
            filter: opacity(100%);;
        }
        
        img{
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 10px;
            transition: 1s ease;  
            filter: opacity(80%);
        }
        .description-card{
            h3{
                padding: 20px;
                font-size: 22px
            }
            p{
                color: gray;
                border-bottom: 1px solid rgb(229, 229, 229);
                padding: 0 20px 20px 20px;
            }
            h5{
                padding: 20px;
                span{
                    font-size: 16px;
                    color:gray;
                    font-weight: 300;
                }
            }
        }
        @media screen and (min-width: 768px){
            flex-basis: 40%;
        }
        @media screen and (min-width: 1400px) {
            flex-basis: 30%;
        }
    }
</style>