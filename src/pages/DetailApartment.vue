<script>
    import Header from "../components/Header.vue";
    import { store } from '../data/store';
    import axios from 'axios';
export default{
    name: 'DetailApartment',
    components:{
        Header,
    },
    data(){
        return{
            store,
            apartment : [],
            isValidUserEmail : false,
            isValidUserName : false,
            isValidUserLastname : false,
            messageSent: ''
        }
    },
    methods:{
        detailApi(){
            axios.get(store.apiUrl + 'apartments').then(results=>{
                        this.apartment = results.data.total_apartments.filter((apartmentSlug => apartmentSlug.slug == this.$route.params.slug))
                        this.apartment = this.apartment[0]
            });
        },

        // Funzione per inviare messaggi
        sendMessage(id) {
            store.messageForm.apartment_id = id;
            
            axios.post(store.apiUrl + 'message', store.messageForm).then(response=>{
                this.messageSent = response.data;
            })
        },

        // Validare il form di invio dei messaggi
        validateForm(){
            
            if (this.isValidUserEmail && this.isValidUserName && this.isValidUserLastname && store.messageForm.text) {
                return false;
            } else {
                return true;
            }
        },

        // Validare i campi Nome e Cognome del form messaggi
        validateUserInput(id) {
            const inputValue = document.getElementById(id).value;
    
            const regex = /^[a-zA-Z\s]{2,}$/;
    
            if (regex.test(inputValue)) {
                document.getElementById(id).classList.add('is-valid');
                document.getElementById(id).classList.remove('is-invalid');
                if(id === 'sender_name') this.isValidUserName = true;
                if(id === 'sender_lastname') this.isValidUserLastname = true;
            } else {
                document.getElementById(id).classList.add('is-invalid');
                document.getElementById(id).classList.remove('is-valid');
                if(id === 'sender_name') this.isValidUserName = false;
                if(id === 'sender_lastname') this.isValidUserLastname = false;
            }
        },

        // Validare il campo Messaggio del form messaggi
        validateUserMessage(id){
            if(store.messageForm.text.length >= 3){
                document.getElementById(id).classList.add('is-valid');
                document.getElementById(id).classList.remove('is-invalid');
            } else {
                document.getElementById(id).classList.add('is-invalid');
                document.getElementById(id).classList.remove('is-valid');
            }
        },

        // Validare il campo Email del form messaggi
        validateUserEmail(id){
            const validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]{2,})+$/;
            if(store.messageForm.sender_email.match(validRegex)){
                document.getElementById(id).classList.add('is-valid');
                document.getElementById(id).classList.remove('is-invalid');
                this.isValidUserEmail = true;
            } else {
                document.getElementById(id).classList.add('is-invalid');
                document.getElementById(id).classList.remove('is-valid');
                this.isValidUserEmail = false;
            }   
        }
    },
    mounted(){
        this.detailApi();
    }
}

</script>


<template>

    <Header class="header-bg"/>

    <div class="bg-detail">
        <div class="ps-container d-flex">

            <div class="left-side">

                <div class="description-general">
                    <div class="d-flex justify-content-between">
                        <div class="description">
                        </div>
    
                        <div class="user-information text-center">
                            <div class="image-user">
                                <!-- <img :src="store.imageUrl + apartment.cover_image" alt=""> -->
                            </div>
                            <!-- <h5>{{ apartment.user.name }}</h5> -->
                        </div>
                    </div>
    
                    <div class="box-image">
                        <!-- <img :src="store.imageUrl + apartment.cover_image" alt=""> -->
                    </div>
    
                    <div class="feature d-flex text-center ">
                        <!-- <div class="box-feature d-flex flex-column justify-content-center">
                            <i class="fa-solid fa-house-chimney"></i>
                            <span>Categoria</span>
                            <h3>{{ apartment.category }}</h3>
                        </div>
    
                        <div class="box-feature d-flex flex-column justify-content-center">
                            <i class="fa-solid fa-bed"></i>
                            <span>Stanze</span>
                            <h3>{{ apartment.n_rooms }}</h3>
                        </div>
    
                        <div class="box-feature d-flex flex-column justify-content-center">
                            <i class="fa-solid fa-bed"></i>
                            <span>Letti</span>
                            <h3>{{ apartment.n_beds }}</h3>
                        </div> -->
    
                        <!-- <div class="box-feature d-flex flex-column justify-content-center">
                            <i class="fa-solid fa-toilet"></i>
                            <span>Bagni</span>
                            <h3>{{ apartment.n_bathrooms }}</h3>
                        </div> -->
                    </div>

                </div>


                <div class="services d-flex">
                    <span>Servizi disponibili:</span>
                    <ul>
                        <li
                        v-for="service in apartment.services"
                        :key="service.id">
                        <i class="fa-solid fa-check"></i> {{ service.name }}
                    </li>
                    </ul>
                </div>

                <div id="map" style="width: 400px; height: 300px"></div>

                

            </div>

            <div class="right-side">
                <div class="contact">
                    <div class="form" v-if="!messageSent">

                        <h1 class="title text-center mb-4">Contattami</h1>

                        <!-- Name -->
                        <div class="form-group position-relative">
                            <label for="sender_name" class="d-block">
                                <i class="icon" data-feather="user"></i>
                            </label>
                            <input v-model="store.messageForm.sender_name" type="text" id="sender_name" class="form-control form-control-lg thick" placeholder="Nome" name="sender_name" @keyup="validateUserInput('sender_name')" autocomplete="off">
                        </div>

                        <!-- Lastname -->
                        <div class="form-group position-relative">
                            <label for="sender_lastname" class="d-block">
                                <i class="icon" data-feather="user"></i>
                            </label>
                            <input v-model="store.messageForm.sender_lastname" type="text" id="sender_lastname" class="form-control form-control-lg thick" placeholder="Cognome" name="sender_lastname" @keyup="validateUserInput('sender_lastname')" autocomplete="off">
                        </div>

                        <!-- E-mail -->
                        <div class="form-group position-relative">
                            <label for="sender_email" class="d-block">
                                <i class="icon" data-feather="mail"></i>
                            </label>
                            <input v-model="store.messageForm.sender_email" type="email" id="sender_email" name="sender_email" class="form-control form-control-lg thick" placeholder="E-mail" @keyup="validateUserEmail('sender_email')" autocomplete="off">
                        </div>

                        <!-- Message -->
                        <div class="form-group message">
                            <textarea v-model="store.messageForm.text" id="text" name="text" class="form-control form-control-lg" rows="7" placeholder="Messaggio" @keyup="validateUserMessage('text')"></textarea>
                        </div>
                    
                        <!-- Submit btn -->
                        <div class="text-center">
                            <button class="btn btn-primary" @click="sendMessage(apartment.id)" tabIndex="-1" :disabled="validateForm()">Invia messaggio</button>
                        </div>

                    </div>

                    <div class="messageSuccess text-center" v-else>
                        <div class="success-checkmark">
                            <div class="check-icon">
                                <span class="icon-line line-tip"></span>
                                <span class="icon-line line-long"></span>
                                <div class="icon-circle"></div>
                                <div class="icon-fix"></div>
                            </div>
                        </div>
                        <span>{{ messageSent }}</span>
                    </div>
                </div>

                <div class="booking">
                    <div class="header text-center">
                        <span>a partire da <strong>{{ apartment.price }}</strong> &euro; a notte</span>
                    </div>
                    <form action="">
                        <div class="date text-center">

                            <input type="date">
                            <input type="date">

                        </div>

                        <button class="ps-btn" type="submit">PRENOTA</button>
                        
                    </form>
                </div>

            </div>

            
        </div>

    </div>
    <div class="bg-detail">
        <div class="ps-container d-flex">

            <div class="left-side">

                <div class="description-general">
                    <div class="d-flex justify-content-between">
                        <div class="description">
                            <h1>{{ apartment.title }}</h1>
                            <h4>{{ apartment.address }}</h4>
                        </div>
    
                        <div class="user-information text-center">
                            <div class="image-user">
                                <img :src="store.imageUrl + apartment.cover_image" alt="">
                            </div>
                            <h5>{{ apartment.user.name }}</h5>
                        </div>
                    </div>
    
                    <div class="box-image">
                        <img :src="store.imageUrl + apartment.cover_image" alt="">
                    </div>
    
                    <div class="feature d-flex text-center ">
                        <div class="box-feature d-flex flex-column justify-content-center">
                            <i class="fa-solid fa-house-chimney"></i>
                            <span>Categoria</span>
                            <h3>{{ apartment.category }}</h3>
                        </div>
    
                        <div class="box-feature d-flex flex-column justify-content-center">
                            <i class="fa-solid fa-bed"></i>
                            <span>Stanze</span>
                            <h3>{{ apartment.n_rooms }}</h3>
                        </div>
    
                        <div class="box-feature d-flex flex-column justify-content-center">
                            <i class="fa-solid fa-bed"></i>
                            <span>Letti</span>
                            <h3>{{ apartment.n_beds }}</h3>
                        </div>
    
                        <div class="box-feature d-flex flex-column justify-content-center">
                            <i class="fa-solid fa-toilet"></i>
                            <span>Bagni</span>
                            <h3>{{ apartment.n_bathrooms }}</h3>
                        </div>
                    </div>

                </div>


                <div class="services d-flex">
                    <span>Servizi disponibili:</span>
                    <ul>
                        <li
                        v-for="service in apartment.services"
                        :key="service.id">
                        <i class="fa-solid fa-check"></i> {{ service.name }}
                    </li>
                    </ul>
                </div>

                <div id="map" style="width: 400px; height: 300px"></div>

                

            </div>

            <div class="right-side">
                <div class="contact">
                    <div class="form" v-if="!messageSent">

                        <h1 class="title text-center mb-4">Contattami</h1>

                        <!-- Name -->
                        <div class="form-group position-relative">
                            <label for="sender_name" class="d-block">
                                <i class="icon" data-feather="user"></i>
                            </label>
                            <input v-model="store.messageForm.sender_name" type="text" id="sender_name" class="form-control form-control-lg thick" placeholder="Nome" name="sender_name" @keyup="validateUserInput('sender_name')" autocomplete="off">
                        </div>

                        <!-- Lastname -->
                        <div class="form-group position-relative">
                            <label for="sender_lastname" class="d-block">
                                <i class="icon" data-feather="user"></i>
                            </label>
                            <input v-model="store.messageForm.sender_lastname" type="text" id="sender_lastname" class="form-control form-control-lg thick" placeholder="Cognome" name="sender_lastname" @keyup="validateUserInput('sender_lastname')" autocomplete="off">
                        </div>

                        <!-- E-mail -->
                        <div class="form-group position-relative">
                            <label for="sender_email" class="d-block">
                                <i class="icon" data-feather="mail"></i>
                            </label>
                            <input v-model="store.messageForm.sender_email" type="email" id="sender_email" name="sender_email" class="form-control form-control-lg thick" placeholder="E-mail" @keyup="validateUserEmail('sender_email')" autocomplete="off">
                        </div>

                        <!-- Message -->
                        <div class="form-group message">
                            <textarea v-model="store.messageForm.text" id="text" name="text" class="form-control form-control-lg" rows="7" placeholder="Messaggio" @keyup="validateUserMessage('text')"></textarea>
                        </div>
                    
                        <!-- Submit btn -->
                        <div class="text-center">
                            <button class="btn btn-primary" @click="sendMessage(apartment.id)" tabIndex="-1" :disabled="validateForm()">Invia messaggio</button>
                        </div>

                    </div>

                    <div class="messageSuccess text-center" v-else>
                        <div class="success-checkmark">
                            <div class="check-icon">
                                <span class="icon-line line-tip"></span>
                                <span class="icon-line line-long"></span>
                                <div class="icon-circle"></div>
                                <div class="icon-fix"></div>
                            </div>
                        </div>
                        <span>{{ messageSent }}</span>
                    </div>
                </div>

                <div class="booking">
                    <div class="header text-center">
                        <span>a partire da <strong>{{ apartment.price }}</strong> &euro; a notte</span>
                    </div>
                    <form action="">
                        <div class="date text-center">

                            <input type="date">
                            <input type="date">

                        </div>

                        <button class="ps-btn" type="submit">PRENOTA</button>
                        
                    </form>
                </div>

            </div>

            
        </div>

    </div>

    

</template>


<style lang="scss" scoped>
@use '../scss/partials/msgSentAnimation';

.bg-detail{
    background-color: #f2f2f2;
    padding-top: 80px;
    .ps-container{
        width: 1600px;
        margin: 0 auto;
        padding-top: 30px;
        // background-color: red; DEBUG
        .left-side{
            width: 65%;
            margin-right: 20px;
            
            .description-general{
                width: 100%;
                border-radius: 10px;
                background-color: #ffffff;
                .description{
                    width: 100%;
                    padding: 40px 0px 0px 40px;
                    border-radius: 10px;
                    h1{
                        font-size: 4rem;
                    }
                    h4{
                        font-size: 1.4rem;
                        font-weight: 400;
                    }
                }
            }

            .services{
                font-size: 1.4rem;
                font-weight: 600;
                padding: 40px;
                border-radius: 8px;
                background-color: #dedede;
            }

            .user-information{
                padding: 40px 40px 40px 0px;
                .image-user{
                width: 170px;
                height: 170px;
                // background-color: red;
                border-radius: 50%;
                overflow: hidden;
                display: block;
                margin-bottom: 10px;
                img{
                    height: 100%;
                }
                }
            }
            .box-image{
                width: 100%;
                background-color: #dedede;
                padding: 20px;
                img{
                    width: 100%;
                }
            }
            .feature{
                padding: 40px;
                .box-feature{
                    height: 200px;
                    width: 25%;
                    border: 1px solid #cccccc;
                    i{
                        color: #3fa9e4;
                        font-size: 40px;
                    }
                    span{
                        font-size: 1.3rem;
                        margin: 7px 0px;
                    }
                }
            }
            .services{
                margin-top: 20px;
                margin-bottom: 100px;
                span{
                    width: 25%;
                    // background-color: red;
                }
                ul{
                    width: 75%;
                    column-count: 2;
                    // background-color: #c90e7b;
                    li{
                        padding: 10px;
                        i{
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
        .right-side{
            width: 35%;
            .contact{
                width: 100%;
                background-color: #ffffff;
                border-radius: 10px; 
                padding: 20px;
                .title {
                    font-family: 'Pacifico', cursive;
                    color: #212529;
                    font-size: 2.5rem;
                }
            
                .form-control {
                    
                    background-color: #f2f6f8;
                    border-radius: 2rem;
                    border: none;
                    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
                    
                    &.thick {
                        height: 3.3rem;
                        padding: .5rem 2rem;
                        margin: 20px 0px;
                    }
                        
                    &:focus {
                        background-color: #f2f6f8;
                        border: none;
                        box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
                    }
                }
                
                .message .form-control {
                        padding: 1rem 2rem;
                }
                
                ::placeholder {
                    font-family: 'Quicksand', sans-serif;
                    font-weight: 600;
                    font-size: 1.1rem;
                    color: #838788;
                    position: relative;
                    left: 0;
                }
                
                input,
                textarea {
                    font-family: 'Quicksand', sans-serif;
                    color: #212529;
                    font-size: 1.1rem;
                }
                
                .icon {
                    color: #57565c;
                    height: 1.3rem;
                    position: absolute;
                    left: 1.5rem;
                    top: 1.1rem;
                }
                
                .btn.btn-primary {
                    font-family: 'Quicksand', sans-serif;
                    font-weight: bold;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    padding: 0 3rem;
                    border: 0;
                    border-radius: 3rem;
                    background-color:#3fa9e4;
                    background-size: 300% 100%;
                    transition: all 0.3s ease-in-out;
                    margin-top: 20px;
                }
            
                .btn.btn-primary:hover:enabled {
                    box-shadow: 0 0.5em 0.5em -0.4em #3fa9e4;
                    background-size: 100% 100%;
                    transform: translateY(-0.15em);
                }

                .messageSuccess {
                    margin: 2.5rem;
                    font-size: 1.2rem;
                    font-weight: bold;
                }
            }
            .booking{
                margin-top: 20px;
                background-color: #ffffff;
                .header{
                    background-color: #555555;
                    padding: 20px;
                    span{
                        font-size: 1.4rem;
                        font-style: italic;
                        color: #ffffff;
                    }
                }
                .date{
                    margin-top: 20px;
                }
                button{
                    width: calc(100% - 40px);
                    margin: 20px;
                    padding: 15px;
                    font-size: 1.4rem;
                    border-radius: 8px;
                    background-color: #3fa9e4;
                    color: #ffffff;
                    border: none;
                    transition: all 0.3s ease-in-out;
                }
                .ps-btn:hover{
                    box-shadow: 0 0.5em 0.5em -0.4em #3fa9e4;
                    background-size: 100% 100%;
                    transform: translateY(-0.15em);
                }
            }
        }
    }
}





</style>