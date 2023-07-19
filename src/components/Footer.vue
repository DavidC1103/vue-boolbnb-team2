<script>
export default {
    name: 'Footer',
}
</script>

<template>
   <!-- footer section start -->
   <footer id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="title-footer">
                        <h2>BOOLBNB</h2>
                        <div class="use-links">
                            <li><a href=""> Chi siamo</a></li>
                            <li><a href=""> Partner</a></li>
                            <li><a href=""> Diventa un partner</a></li>
                            <li><a href=""> Istituzioni</a></li>
                            <li><a href=""> Lavora con noi</a></li>
                            <li><a href=""> Programma di Brand Ambassador</a></li>
                            <li><a href=""> Termini e condizioni</a></li>
                            <li><a href=""> Informazioni di contatto</a></li>
                            <li><a href=""> Politica di cookies</a></li>
                            <li><a href=""> Politica di privacy</a></li>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="title-footer">
                        <h2>INQUILINI</h2>
                        <div class="use-links">
                            <li class="address1"> <a href="">Come funziona</a></li>
                            <li><a href=""> Aiuto</a></li>
                            <li><a href=""> Promozioni</a></li>
                            <li><a href=""> Contattaci</a></li>
                        </div>
                    </div>

                    <div class="title-footer">
                        <h2>PROPRIETARI</h2>
                        <div class="use-links">
                            <li class="address1"><a href=""> Pubblica la tua proprietà</a></li>
                            <li><a href=""> Aiuto</a></li>
                            <li><a href=""> Contattaci</a></li>
                        </div>
                    </div>
                </div>  

                
                
                <div class="col-md-3">
                    <div class="title-footer">
                        <h2>INDIRIZZO</h2>
                        <div class="use-links icon-contatti">
                            <li class="address1"><a href=""><i class="fa-solid fa-location-dot"></i>Vle Cassala 22 Milano Lombardia 20143</a></li>
                            <li><a href=""><i class="fa-solid fa-phone"></i>39 02 3055 8515</a></li>
                            <li><a href=""><i class="fa-solid fa-envelope"></i>ciao@boolean.careers</a></li>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="title-footer">
                        <h2>SEGUICI</h2>
                        <div class="use-links d-flex">
                            <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href=""><i class="fa-brands fa-youtube"></i></a></li>
                            <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                        </div>
                    </div>
                </div>  
            </div>

            <div class="line"></div>

            <div class="footer-bottom">

                <div class="row">
                <div class="col-md-3">
                    <div class="title-footer d-flex">

                        <div class="download-app">
                            <h2>SCARICA L'APP</h2>
                            <img src="../assets/footer/download-app.png" alt="">
                        </div>

                    </div>
                </div>

                <div class="col-md-3">
                    <div class="title-footer d-flex">

                        <div class="metodo-pagamento">
                            <h2>METODI DI PAGAMENTO</h2>
                            <img src="../assets/footer/card.png" alt="">
                        </div>
                                                
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="title-footer d-flex">

                        <div class="valutazione">
                            <img src="../assets/footer/trustpilot.png" alt="">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                                                
                    </div>
                </div>

            </div>
            </div>
        </div>
    </footer>
    <!-- footer section end -->

    <!-- footer copy right section start -->
    <section id="copy-right">
      <div class="copy-right-sec"><i class="fa-solid fa-copyright"></i> <i>BOOLBNB</i> 2023 Powerd By <a href="https://boolean.careers/">Boolean Careers</a> 
      </div>
    </section>
    <!-- footer copy right section end -->
</template>

<style lang="scss">
@use '../scss/main.scss' as *;

#footer{
    background: #f7f7f7;
    padding: 3rem;
    padding-top: 4rem;
    padding-bottom: 80px;
    background-color: #f4efed;
}
#footer2{
    background: #f7f7f7;
    padding: 3rem;
    margin-top: 0px;
    padding-top: 7rem;
    padding-bottom: 80px;
    background-image: url(../images/cards/v748-toon-111.png);
}

.social-links h2{
    padding-bottom: 15px;
    font-size: 20px;
    font-weight: 600;
}
.social-links img{
    padding-bottom: 25px;
}
.social-icons{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #777777;
}
.social-icons a{
  color: #777777;
}
.social-icons a:hover{
  color: #000;
}
.social-icons a i{
    box-shadow: rgb(0 0 0 / 8%) 0px 4px 12px;
    padding: 0.4rem 1rem 0.4rem 1rem;
    border-radius: 3px;
    color: #3D40F5;
    font-size: 16px;
    margin-right: 12px;
}
li{
    list-style: none;
    line-height: 20px;
}
.title-footer h2{
    padding-bottom: 10px;
    padding-top: 20px;
    font-size: 14px;
    font-weight: 600;
    margin: 0px;
}
.useful-link img{
    padding-bottom: 15px;
}

.use-links li i{
    font-size: 28px;
    margin-right: 15px;
    color: black;
    &:hover{
        color: #3d40f5;
    }
}
.use-links li a{
    font-size: 15px;
    font-weight: 500;
    color: #777777;
    text-decoration: none;
    
}
.use-links li a:hover{
    color: #000;
    text-decoration: underline;
}
.address h2{
    padding-bottom: 15px;
    font-size: 20px;
    font-weight: 600;
}

.valutazione{
    img{
        width: 120px;
        margin-right: 10px;
    }
    i{
        margin-right: 2px;
    }
}
.address img{
    padding-bottom: 15px;
}
.address-links li a{
    color: #303030;
    font-size: 15px;
    font-weight: 500;
    color: #777777;

}

.address-links li i:nth-child(1){
    padding-top: 9px;
}
.address-links .address1{
    font-weight: 500;
    font-size: 15px;
    display: flex;
}
.address-links{
    line-height: 32px;
    color: #777777;
}
.copy-right-sec{
    padding: 1.8rem;
    background: #3D40F5;
    color: #fff;
    text-align: center;
}
.copy-right-sec a{
    color: #fcd462;
    font-weight: 500;
}

.use-links.icon-contatti{
    li{
        a{
            i{
                font-size: 15px;
            }
        }
    }
}

.line{
    height: 1px;
    background-color: #c7c7c7;
    margin: 40px 0px 40px 0px;
    width: 85%;
}
.assistenza{
    border: 1px solid black;
    padding: 20px 40px;
}

.download-app{
    img{
        width: 280px;
    }
}

.metodo-pagamento{
    img{
        width: 250px;
    }
}
</style>