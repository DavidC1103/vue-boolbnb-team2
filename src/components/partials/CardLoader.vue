<script>
export default {
    name: 'CardLoader',
}
</script>

<template>
    <!-- Single card -->
    <div class="boolbnb-card">
        <div class="box-image loader mb-4"></div>
        <div class="description-card">
            <div class="div loader title ms-3 mb-4"></div>
            <div class="div loader subtitle ms-3 mb-5"></div>
            <div class="div loader price ms-3 mb-4"></div>
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
        @media screen and (min-width: 768px){
            flex-basis: 40%;
        }
        @media screen and (min-width: 1400px) {
            flex-basis: 30%;
        }
    }
    .loader {
        background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
        border-radius: 5px;
        background-size: 200% 100%;
        animation: 1s shine linear infinite;
    }
    .box-image {
        height: 250px;
        width: 100%;
    }
    .title {
        height: 2rem;
        width: 80%;
    }
    .subtitle {
        height: 1rem;
        width: 90%;
    }
    
    .price {
        width: 25%;
        height: 1.5rem;
    }

    @keyframes shine {
        to {
            background-position-x: -200%;
        }
    }
</style>