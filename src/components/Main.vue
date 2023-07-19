
<script>
import testimonials from './partials/testimonials.vue'


export default {
    name: 'Main',
    components: {
        testimonials
    },
    data(){

        return{

        }
    }
}
</script>

<template>
    <main class="container">
        <h1 class="text-start py-1 mt-4 mb-3" id="evidenza">In evidenza</h1>
        

            <!-- Cards container -->
            <div class="container-card d-flex flex-wrap">

                <!-- Single card -->
                <div class="boolbnb-card ">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/napoli-1653914862.png">
                    <h3>Appartamento a Napoli</h3>
                    <p>Napoli, Campania</p>
                    <h6><strong>300,00€</strong> a notte</h6>
                </div>
                
                <!-- Single card -->
                <div class="boolbnb-card ">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/napoli-1653914862.png">
                    <h3>Appartamento a Napoli</h3>
                    <p>Napoli, Campania</p>
                    <h6><strong>300,00€</strong> a notte</h6>
                </div>
                
                <!-- Single card -->
                <div class="boolbnb-card">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/napoli-1653914862.png">
                    <h3>Appartamento a Napoli</h3>
                    <p>Napoli, Campania</p>
                    <h6><strong>300,00€</strong> a notte</h6>
                </div>

                <!-- Single card -->
                <div class="boolbnb-card ">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/napoli-1653914862.png">
                    <h3>Appartamento a Napoli</h3>
                    <p>Napoli, Campania</p>
                    <h6><strong>300,00€</strong> a notte</h6>
                </div>

                <!-- Single card -->
                <div class="boolbnb-card ">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/napoli-1653914862.png">
                    <h3>Appartamento a Napoli</h3>
                    <p>Napoli, Campania</p>
                    <h6><strong>300,00€</strong> a notte</h6>
                </div>

                <!-- Single card -->
                <div class="boolbnb-card ">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/napoli-1653914862.png">
                    <h3>Appartamento a Napoli</h3>
                    <p>Napoli, Campania</p>
                    <h6><strong>300,00€</strong> a notte</h6>
                </div>

            </div>

    </main>
    <testimonials/>
</template>

<style lang="scss">
@use '../scss/main.scss' as *;

    main{
        margin-bottom: 50px;
        margin-top: 100px;
        .container-card{
            width: 100%;
            height: 100%;
            .boolbnb-card{
                flex-basis: 25%;
                margin: 10px 20px;
                img{
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                    border-radius: 10px;
                }

                p{
                    color: gray;
                }
            }
        }
        
    }

</style>