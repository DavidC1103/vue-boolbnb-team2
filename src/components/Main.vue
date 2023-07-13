
<script>
export default {
    name: 'Main'
}
</script>

<template>
    <main>
        <h1 class="text-center py-1 mt-4 mb-3">In evidenza</h1>
        <div class="container">

            <!-- Cards container -->
            <div class="container-card d-flex flex-wrap">

                <!-- Single card -->
                <div class="mc-card reveal fade-left">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/napoli-1653914862.png">
                    <h3>Appartamento a Napoli</h3>
                    <p>Napoli, Campania</p>
                    <h6><strong>300,00€</strong> a notte</h6>
                </div>
                
                <!-- Single card -->
                <div class="mc-card reveal fade-bottom">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/napoli-1653914862.png">
                    <h3>Appartamento a Napoli</h3>
                    <p>Napoli, Campania</p>
                    <h6><strong>300,00€</strong> a notte</h6>
                </div>
                
                <!-- Single card -->
                <div class="mc-card reveal fade-right">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/napoli-1653914862.png">
                    <h3>Appartamento a Napoli</h3>
                    <p>Napoli, Campania</p>
                    <h6><strong>300,00€</strong> a notte</h6>
                </div>

                <!-- Single card -->
                <div class="mc-card reveal fade-left">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/napoli-1653914862.png">
                    <h3>Appartamento a Napoli</h3>
                    <p>Napoli, Campania</p>
                    <h6><strong>300,00€</strong> a notte</h6>
                </div>

                <!-- Single card -->
                <div class="mc-card reveal fade-top">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/napoli-1653914862.png">
                    <h3>Appartamento a Napoli</h3>
                    <p>Napoli, Campania</p>
                    <h6><strong>300,00€</strong> a notte</h6>
                </div>

                <!-- Single card -->
                <div class="mc-card reveal fade-right">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/napoli-1653914862.png">
                    <h3>Appartamento a Napoli</h3>
                    <p>Napoli, Campania</p>
                    <h6><strong>300,00€</strong> a notte</h6>
                </div>

            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

    main{
        height: 100vh;
        margin-bottom: 50px;
        h1{
            background-color: $argentinian_blue;
            color: white;
        }
        .container-card{
            .mc-card{
                width: calc(100% / 3 - 20px);
                margin: 15px 10px;
                img{
                    width: 100%;
                    height: 300px;
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