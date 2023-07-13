<script>
export default {
    name: 'Footer',
}
</script>

<template>

    <footer>
        <div class="container">
            <div class="footer-nav">
                <!-- first column -->
                <div class="col">

                    <ul>
                        <h4>Info</h4>
                        <li>
                            <a href="#">characters</a>
                            <a href="#">comics</a>
                            <a href="#">movies</a>
                            <a href="#">TV</a>
                            <a href="#">games</a>
                            <a href="#">video</a>
                            <a href="#">news</a>
                        </li>
                    </ul>

                    <ul>
                        <h4>Marketing</h4>
                        <li>
                            <a href="#">strategies</a>
                            <a href="#">visions</a>
                        </li>
                    </ul>

                </div>
                <!-- second column -->
                <div class="col">
                    <ul>
                        <h4>Customers Service</h4>
                        <li>
                            <a href="#">terms of use</a>
                            <a href="#">privacy policy</a>
                            <a href="#">ad choices</a>
                            <a href="#">advertising</a>
                            <a href="#">jobs</a>
                            <a href="#">subscriptions</a>
                            <a href="#">talent workship</a>
                            <a href="#">CSPC certificates</a>
                            <a href="#">ratings</a>
                            <a href="#">shop help</a>
                            <a href="#">contact us</a>
                        </li>
                    </ul>
                </div>
                <!-- third column -->
                <div class="col">
                    <ul>
                        <h4>sites</h4>
                        <li>
                            <a href="#">DC</a>
                            <a href="#">MAD magazine</a>
                            <a href="#">DC kids</a>
                            <a href="#">DC universe</a>
                            <a href="#">DC power visa</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

</template>

<style lang="scss">
@use '../scss/main.scss' as *;

footer {
    display: flex;
    justify-content: center;
    height: 360px;
    width: 100%;
    background-color: #0A0F59;
    overflow-y: hidden;

    .container {
        display: flex;
        width: 80%;
        height: 100%;
        .footer-nav {
            display: flex;
            width: 100%;
            padding-top: 40px;
            //debug
            // border: 5px solid gold;
            .col{                
                width: 22%;
                ul{
                    margin-bottom: 15px;
                    h4{
                        // font-size: 1.2rem;
                        text-transform: uppercase;
                        color: white;
                    }
                    li{
                        display: flex;
                        flex-direction: column;
                        margin: 10px 0;
                        a {
                            color: lightgray;
                            text-transform: capitalize;
                            font-size: 0.8rem;
                            transition: all .3s;
                            &:hover {
                                color: $primary;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>