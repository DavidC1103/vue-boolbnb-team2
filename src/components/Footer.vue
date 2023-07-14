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
                    <a href="index.html"><img src="../assets/logo-boolbnb/1.png" alt="" class="img-fluid logo-footer"></a>
                    <div class="footer-about">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="useful-link ms-5 ps-5">
                        <h2>Useful Links</h2>
                        <img src="./assets/images/about/home_line.png" alt="" class="img-fluid">
                        <div class="use-links">
                            <li><a href=""><i class="fa-solid fa-angles-right"></i> Home</a></li>
                            <li><a href=""><i class="fa-solid fa-angles-right"></i> About Us</a></li>
                            <li><a href=""><i class="fa-solid fa-angles-right"></i> Gallery</a></li>
                            <li><a href=""><i class="fa-solid fa-angles-right"></i> Contact</a></li>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="social-links ms-5 ps-5">
                        <h2>Follow Us</h2>
                        <img src="./assets/images/about/home_line.png" alt="">
                        <div class="social-icons">
                            <li><a href=""><i class="fa-brands fa-facebook-f"></i> Facebook</a></li>
                            <li><a href=""><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href=""><i class="fa-brands fa-linkedin-in"></i> Linkedin</a></li>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="address ms-5 ps-5">
                        <h2>Address</h2>
                        <img src="./assets/images/about/home_line.png" alt="" class="img-fluid">
                        <div class="address-links">
                            <li class="address1"><i class="fa-solid fa-location-dot"></i> Vle Cassala 22 Milano Lombardia 20143</li>
                            <li><a href=""><i class="fa-solid fa-phone"></i> 39 02 3055 8515</a></li>
                            <li><a href=""><i class="fa-solid fa-envelope"></i> ciao@boolean.careers</a></li>
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
    padding-top: 7rem;
    padding-bottom: 80px;
    background-image: url(https://arena.km.ua/wp-content/uploads/3538533.jpg);
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
}
.useful-link h2{
    padding-bottom: 15px;
    font-size: 20px;
    font-weight: 600;
}
.useful-link img{
    padding-bottom: 15px;
}
.use-links{
    line-height: 32px;
}
.use-links li i{
    font-size: 14px;
    padding-right: 8px;
    color: #3D40F5;
}
.use-links li a{
    color: #303030;
    font-size: 15px;
    font-weight: 500;
    color: #777777;
}
.use-links li a:hover{
    color: #000;
}
.address h2{
    padding-bottom: 15px;
    font-size: 20px;
    font-weight: 600;
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
.address-links li i{
    font-size: 16px;
    padding-right: 8px;
    color: #3D40F5;

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
a{
  text-decoration:none;
}
</style>