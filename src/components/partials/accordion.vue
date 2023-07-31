  <script >
  export default {
    data(){
        name:'accordion'
        return{
    
        }
    }
  }
  </script>


<template>
  <div class="bg-accordion">
  <main class="faq">        
        <div class="faq__holder">
        <h1 class="faq__heading">Domande?</h1>
        <details class="faq__detail">
            <summary  class="faq__summary"><span class="faq__question">Posso cancellare la prenotazione?</span></summary>
            <p class="faq__text">Puoi cancellare la tua prenotazione in qualsiasi momento. Ecco come funziona:

            Non ti sarà addebitato niente se cancelli una prenotazione prima che il proprietario abbia accettato.

            Ma se cancelli dopo che la tua prenotazion è stata accettata, non ti sarà restituita la tua tassa di Spotahome, e potresti perdere parte dell'affitto pagato in anticipo.</p>
        </details>
      
        <details class="faq__detail">
          <summary  class="faq__summary"><span class="faq__question">Posso visitare un'immobile prima di prenotare?</span></summary>
          <p class="faq__text">No, ma il bello di prenotare con noi è che non devi visitare la proprietà. Il nostro team verifica le proprietà per te, lasciandoti più tempo per pianificare, fare le valige e rilassarti.</p>
        </details>  
      
        <details class="faq__detail">
          <summary  class="faq__summary"><span class="faq__question">La mia prenotazione è stata accettata, e adesso?</span></summary>
          <p class="faq__text">Pagherai la tua tassa di BoolBnB  e il soggiorno. 
          Inoltre ti metteremo in contatto con il proprietario così potrai fissare un'ora per il check in.
          L'unica cosa che devi fare è rilassarti - sei in partenza!</p>
        </details>  
        
        <details class="faq__detail">
          <summary  class="faq__summary"><span class="faq__question">BoolBnB è sicuro?</span></summary>
          <p class="faq__text">BoolBnB è una piattaforma sicura utilizzata da più di 27K persone, mantenendo sempre 4 stelle su 5 su trustpilot.
          A BoolBnB, ci mettiamo il cuore per renderti la vita più facile e toglierti ogni preoccupazione:
          <br>
          </p>
          <div class="font">
            
            &#8226; Il nostro sistema ti garantisce un'esperienza ottima con pagamenti sicuri e protezione fino a 24 ore dopo l'arrivo. Trasferiamo il tuo pagamento al proprietario solo dopo che ci hai dato il via libera, e una politica di cancellazione è di prassi, tra le altre garanzie.
          </div>
        </details> 
        
        
      </div>
      </main> 
    </div>
</template>


<style lang="scss" scoped>

:root {
    
    /* colors */
    --purple: #7276e1;
    --orange: hsl(14, 88%, 65%);
    --blue-dark: hsl(238, 29%, 16%);
    --grey-light: hsl(237, 12%, 33%);
    --blue-mid: hsl(240, 6%, 50%);

    /* fonts */
    --font: 'Kumbh Sans', sans-serif;
    --base-font-size: 1.2rem;

}

.attribution { 
    color: #fff;
    font-size: 11px; 
    margin-top: 25px;
    text-align: center;  
}

.attribution a { color:#fff; }

* { box-sizing: border-box; }

html {
    font-size: 10px;
}

.bg-accordion{ 
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 400;
    justify-content: center;
    margin-bottom: 100px;
}

.faq { 
    background-color: #fff;
    border-radius: 25px;
    padding: 50px 25px;
    width: 600px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
}


.faq__heading { 
    color: #3fa9e4;
    font-size: 3.2rem;
    font-weight: 700;
    text-align: center; 
}

.faq__detail {
    border-bottom: 1px solid hsl(240, 5%, 91%);
    margin: 20px 0 0 0;
    padding: 5px 0 20px 0;
}

.faq__summary:hover,
.faq__summary:active { 
    color: #3fa9e4;
    cursor: pointer; 
}

.faq__detail[open] > .faq__summary { 
    font-weight: 700; 
}

.faq__summary {
    list-style: none;
  }

.faq__summary::-webkit-details-marker {
    display: none;
  }

.faq__summary { 
    display: block;
    padding: 0;
    position: relative;
    text-align: right;
}

    
.faq__summary:after {
    display: inline-block;
    content: url("../../assets/accordion/arrow-down.png");
    background-repeat: no-repeat;
    background-position: right center;
    text-align: right;
    padding-bottom: 20px;
  }
  
details[open] .faq__summary:after {
    display: inline-block;
    width: 18px;
    height: 10px;
    content: "";
    background-image: url("../../assets/accordion/arrow-down.png");
    background-repeat: no-repeat;
    background-position: center right;
    transform:scaleY(-1);
}
  

.faq__question {
    left: 0;
    position: absolute;
    text-align: left;
    top: 0;
    width: 90%;
}

.faq__question {
    display: inline-block;
    margin: 5px 0;
    text-align: left;
    width: 90%;
}

.faq__summary {
    font-size: 1.3rem; 
}

.faq__summary:focus {
    color: #3fa9e4; 
    font-weight: bold;
    outline: none;
}

.faq__text {
    color: hsl(240, 6%, 50%);
    font-size: 1rem;
    line-height: 1.6;
    margin: 10px 0 0 0;
}

.hidden-lg { display: block; }
    
.visible-lg { display: none; }

.font{
  color: hsl(240, 6%, 50%);
}

@media (min-width: 0 ) and (max-width: 950px){

.faq{
	width: 80%;
  padding: 25px 12.5px;
  .faq__heading{
    font-size: 1.5rem;
  }
  .faq__detail{
    margin: 0px;
    padding: 5px 0px 0px 0px;

    .faq__summary{
      font-size: 0.9rem;
      .faq__question{
        width: 95%;
      }
    }
    .faq__text, .font{
      font-size: 0.6rem;
      padding-bottom: 5px;
    }
    .faq__text{
      padding-top: 10px;
    }
  }
}
}
</style>