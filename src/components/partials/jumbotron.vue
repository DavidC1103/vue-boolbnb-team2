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
				this.$router.push({ name: "advanced-search", query: { city: city } });
			}
		},
		mounted(){
    }
}
</script>

<template>
    <div class="boolbnb-jumbotron">
        <div class="layer text-white text-center active fade-left ">
            <h1>Trova e prenota il tuo posto ideale</h1>
            <div class="search d-none d-lg-flex">
                <input id='search-btn' type='checkbox'/>
                <label for='search-btn'>Show search bar</label>
                <input @keyup.enter="getResult(store.inputText)" v-model="store.inputText" id='search-bar' type='text' placeholder='Inserisci località'/>      
            </div>


						<div class="search-bar d-flex justify-content-center d-lg-none">
	<input class="" @keyup.enter="getResult(store.inputText)" v-model="store.inputText" type="search" name="search" pattern=".*\S.*" required>
	<button class="search-btn" @click="getResult(store.inputText)">
		<span>Search</span>
	</button>
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
        background: rgba(0,0,0,0.40);
        border-radius: 8px;
        width: 900px;
        h1{
            font-size: 3.4rem;
            font-weight: bold;
            margin-bottom: 60px;
            padding-top: 20px;
			font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        }
        h2{
            font-size: 1.4rem;
            font-weight: bold;
            padding-top: 10px;
        }
        .search{
            display: flex;
            align-items: center;
            justify-content: center;
						padding-bottom: 60px;
        }
    }
    .jumbo-faded{
        height: 15rem;
        background-image: linear-gradient(180deg, transparent, rgba(202, 202, 202, 0.61),#fff);
    }
}


@media (min-width: 0 ) and (max-width: 575px){


	.search-bar input,
.search-btn, 
.search-btn:before, 
.search-btn:after {
	transition: all 0.25s ease-out;
}
.search-bar input,
.search-btn {
	width: 3em;
	height: 3em;
}
.search-bar input:invalid:not(:focus),
.search-btn {
	cursor: pointer;
}
.search-bar,
.search-bar input:focus,
.search-bar input:valid  {
	width: 100%;
}
.search-bar input:focus,
.search-bar input:not(:focus) + .search-btn:focus {
	outline: transparent;
}
.search-bar {
	margin: auto;
	padding: 1.5em;
	justify-content: center;
	max-width: 30em;
}
.search-bar input {
	background: transparent;
	border-radius: 1.5em;
	box-shadow: 0 0 0 0.4em #171717 inset;
	padding: 0.75em;
	transform: translate(0.5em,0.5em) scale(0.5);
	transform-origin: 100% 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
.search-bar input::-webkit-search-decoration {
	-webkit-appearance: none;
}
.search-bar input:focus,
.search-bar input:valid {
	background: #fff;
	border-radius: 0.375em 0 0 0.375em;
	box-shadow: 0 0 0 0.1em #d9d9d9 inset;
	transform: scale(1);
}
.search-btn {
	background: #171717;
	border-radius: 0 0.75em 0.75em 0 / 0 1.5em 1.5em 0;
	padding: 0.75em;
	position: relative;
	transform: translate(0.25em,0.25em) rotate(45deg) scale(0.25,0.125);
	transform-origin: 0 50%;
}
.search-btn:before, 
.search-btn:after {
	content: "";
	display: block;
	opacity: 0;
	position: absolute;
}
.search-btn:before {
	border-radius: 50%;
	box-shadow: 0 0 0 0.2em #f1f1f1 inset;
	top: 0.75em;
	left: 0.75em;
	width: 1.2em;
	height: 1.2em;
}
.search-btn:after {
	background: #f1f1f1;
	border-radius: 0 0.25em 0.25em 0;
	top: 51%;
	left: 51%;
	width: 0.75em;
	height: 0.25em;
	transform: translate(0.2em,0) rotate(45deg);
	transform-origin: 0 50%;
}
.search-btn span {
	display: inline-block;
	overflow: hidden;
	width: 1px;
	height: 1px;
}

/* Active state */
.search-bar input:focus + .search-btn,
.search-bar input:valid + .search-btn {
	background: #3fa9e4;
	border-radius: 0 0.375em 0.375em 0;
	transform: scale(1);
}
.search-bar input:focus + .search-btn:before, 
.search-bar input:focus + .search-btn:after,
.search-bar input:valid + .search-btn:before, 
.search-bar input:valid + .search-btn:after {
	opacity: 1;
}
.search-bar input:focus + .search-btn:hover,
.search-bar input:valid + .search-btn:hover,
.search-bar input:valid:not(:focus) + .search-btn:focus {
	background: #040916;
}
.search-bar input:focus + .search-btn:active,
.search-bar input:valid + .search-btn:active {
	transform: translateY(1px);
}

@media screen and (prefers-color-scheme: dark) {
	body, input {
		color: #f1f1f1;
	}
	body {
		background: #171717;
	}
	.search-bar input {
		box-shadow: 0 0 0 0.4em #3fa9e4 inset;
	}
	.search-bar input:focus,
	.search-bar input:valid {
		background: #082773;
		box-shadow: 0 0 0 0.1em #3d3d3d inset;
	}
	.search-btn {
		background: #3fa9e4;
	}
}
	

	.jumbo{
		display: block !important;
	}

.boolbnb-jumbotron{
	height: 60vh;
	padding-top: 25%;
	.layer{
		width: 70%;
		background: transparent;
		h1{
			font-size: 1.6rem;
			margin-bottom: 0;
		}
	}
}
.jumbo-faded{
	display: none;
}

}


.xsm-none{
  display: none !important;
}







// // SEARCH CUSTOM DESKTOP
$btn-d: 5em;
$txt-w: 4*$btn-d;
$txt-h: .65*$btn-d;
$txt-c: #ffffff;
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
	border: none;
	width: $txt-w; height: $txt-h;
	border-radius: $txt-h;
	transform: translate(var(1, .5*$txt-w));
	background: #0a0f59;
	--cp: inset(-2em var(--pos, 100%) -2em -2em);
	-webkit-clip-path: var(--cp);
					clip-path: var(--cp);
	color: #ffffff;
	font: 1em century gothic, verdana, arial, sans-serif;
	transition: $t;
	
	&::placeholder {
		color: inherit;
		font-size: .875em;
		letter-spacing: 1px;
		text-shadow: 0 0 1px, 0 0 2px
	}
	
	&:focus {
		outline: none;
		box-shadow: 0 0 1.5em $txt-c, 0 1.25em 1.5em rgba(#000, .2);
		background: $txt-c;
		color: #0a0f59;
	}
}





</style>