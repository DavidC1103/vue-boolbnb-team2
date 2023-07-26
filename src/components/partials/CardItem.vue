<script>
import { store } from '../../data/store';

export default {
    name: 'CardItem',

    props:{
        img : String,
        title : String,
        address: String,
        price : String
    }
}
</script>

<template>
    <!-- Single card -->
    <div
        class="boolbnb-card"
        >
        <img :src="img">
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
    .boolbnb-card{
        border-radius: 15px;
        flex-basis: 30%;
        margin: 20px 20px;
        box-shadow: rgba(200, 200, 200, 0.5) 0px 0px 0.5rem 0px;
        overflow: hidden;
        img{
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-radius: 10px;
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
        
    }
</style>