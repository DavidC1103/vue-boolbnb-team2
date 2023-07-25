<script>

import { store } from '../../data/store';

export default {
    data(){
        name:'jumbotron'
        return{
			store
        }
    },
		methods:{
			getResult(city){
				store.inputText = city;
				$router.push('/advanced-search');
			}
		}
}
</script>

<template>
    <div class="boolbnb-jumbotron">
        <div class="layer text-white text-center active fade-left ">
            <h1>Trova e prenota il tuo posto ideale</h1>
            <div class="search">
                <input id='search-btn' type='checkbox'/>
                <label for='search-btn'>Show search bar</label>
                <input @keyup.enter="$router.push('/advanced-search') " v-model="store.inputText" id='search-bar' type='text' placeholder='Inserisci indirizzo'/>
            </div>
            <h2>Ricerche popolari</h2>
            <div class="links-ricerche">
                <a @click="getResult('Roma')" href="#">Roma, </a>
                <a href="#">Napoli, </a>
                <a href="#">Palermo, </a>
                <a href="#">Milano, </a> 
                <a href="#">Bologna, </a>
                <a href="#">Torino</a>
            </div>
        </div>
        <div class="jumbo-faded"></div>
    </div>
  
</template>

<style lang="scss">
.boolbnb-jumbotron{
    background-image: url('../../assets/jumbotron/jumbotron.jpg');
    background-size: cover;
    background-position: center;
    height: 650px;
    color: rgb(5, 5, 5);
    padding-top: 180px;
    .layer{
        margin: 0 auto;
        background: rgba(0,0,0,0.57);
        border-radius: 8px;
        width: 900px;
        h1{
            font-size: 3.8rem;
            font-weight: bold;
            margin-bottom: 20px;
            padding-top: 20px;
						font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        }
        h2{
            font-size: 1.4rem;
            font-weight: bold;
            padding-top: 10px;
        }
        .links-ricerche{
            padding-bottom: 20px;
            a{
                font-size: 1.5rem;
                color: white;
                margin-bottom: 30px;
                
            }
        }
        .search{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .jumbo-faded{
        height: 7rem;
        background-image: linear-gradient(180deg, transparent, rgba(202, 202, 202, 0.61),#fff);
    }
}

// SEARCH CUSTOM
$btn-d: 5em;
$txt-w: 4*$btn-d;
$txt-h: .65*$btn-d;
$txt-c: #ffeacc;
$mag-d: .5*$txt-h;
$mag-f: .125;
$mag-w: $mag-f*$mag-d;
$mag-c: #000;
$t: .65s;

[id='search-btn'] {
	position: absolute;
	left: -100vw;
	
	~ * {
		--i: var(--pos, 1);
		--j: calc(1 - var(--i))
	}
	
	&:checked ~ * { --pos: 0 }
}

[for='search-btn'] {
	order: 1;
	overflow: hidden;
	position: relative;
	z-index: 2;
	margin-left: -.25*$btn-d;
	width: $btn-d; height: $btn-d;
	border-radius: 50%;
	transform: translate(var(--pos, -.5*$txt-w)) rotate(45deg);
	background: #3fa9e4;
	text-indent: -100vw;
	transition: $t ease-out;
	cursor: pointer;
	
	&:before, &:after {
		position: absolute;
		top: 50%; left: 50%;
		margin: -.5*$mag-d;
		width: $mag-d; height: $mag-d;
		transition: inherit;
		content: ''
	}
	
	&:before {
		margin-top: -.4*$mag-w;
		height: $mag-w;
		transform-origin: 100% 0;
		transform: translate(var(--pos, .25*$mag-d)) 
			scalex(calc(1 - var(--i)*.5));
		background: currentcolor;
	}
	
	&:after {
		border: solid $mag-w currentcolor;
		border-radius: calc(var(--i)*50%);
		transform: translate(var(--pos, -.25*$mag-d)) 
			scalex(calc(var(--j)*#{$mag-f} + var(--i)));
		box-shadow: inset 0 0 0 calc(var(--j)*#{.5*$mag-d}) currentcolor;
		transition-property: border-radius, transform, box-shadow;
		transition-timing-function: 
			cubic-bezier(calc(var(--j)*.42),0,calc(1 - var(--i)*.42),1), 
			cubic-bezier(calc(var(--i)*.42),0,calc(1 - var(--j)*.42),1)
	}
}

[id='search-bar'] {
	margin-right: -.25*$btn-d;
	border: none;
	padding: 0 1em;
	width: $txt-w; height: $txt-h;
	border-radius: $txt-h;
	transform: translate(var(--pos, .5*$txt-w));
	background: #3f324d;
	--cp: inset(-2em var(--pos, 100%) -2em -2em);
	-webkit-clip-path: var(--cp);
					clip-path: var(--cp);
	color: #fff;
	font: 1em century gothic, verdana, arial, sans-serif;
	transition: $t;
	
	&::placeholder {
		opacity: .5;
		color: inherit;
		font-size: .875em;
		letter-spacing: 1px;
		text-shadow: 0 0 1px, 0 0 2px
	}
	
	&:focus {
		outline: none;
		box-shadow: 0 0 1.5em $txt-c, 0 1.25em 1.5em rgba(#000, .2);
		background: $txt-c;
		color: #000;
	}
}
</style>