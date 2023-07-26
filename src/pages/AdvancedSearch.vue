<script>
import { store } from '../data/store';
import axios from 'axios';
import Header from '../components/Header.vue';

export default {
  components: { Header },
  name: 'AdvancedSearch',
  data() {
    return {
      latitude: 40.803755,
      longitude: 14.198047,
      radius: 30,
      arrSearch :[],
      store
    };
  },
  methods: {
    searchApartments() {
      const requestData = {
        input: store.inputText,
        radius: store.rangeValue,
        services: store.servicesToSearch
      };

      // console.log('requestData:', requestData.radius);

      axios.post(store.apiUrl + 'search', requestData)
        .then(response => {
          this.arrSearch = response.data.apartments;
          console.log(this.arrSearch); 
      })
    },
    refreshSearch(id){
      if(store.servicesToSearch.includes(id)){
        store.servicesToSearch.splice(store.servicesToSearch.indexOf(id), 1);
      }else{
        store.servicesToSearch.push(id)
      }
      this.searchApartments();
    },
    inSequence(a, b, c) {
      let d = b - a;
      if (d == 0) {
        return 1;
      }
      if (d < 0) {
        if (c >= 0) {
          return 0;
        }
        if (d % c == 0) {
          return 1;
        }
        return 0;
      } else {
        if (c <= 0) {
          return 0;
        }
        if (d % c == 0) {
          return 1;
        }
        return 0;
      }
    }
  },
  mounted() {
    store.servicesToSearch = [];
    store.rangeValue = 20;
    this.searchApartments();

    var rangeSlider = document.getElementById("rs-range-line");
    var rangeBullet = document.getElementById("rs-bullet");

    console.log(rangeSlider, rangeBullet)

    rangeSlider.addEventListener("input", showSliderValue, false);

    function showSliderValue() {
      rangeBullet.innerHTML = rangeSlider.value;
      // var bulletPosition = (rangeSlider.value /rangeSlider.max);
      rangeBullet.style.left = (bulletPosition * 578) + "px";
    }
  }
}
</script>


<template>

  <Header class="header-bg"/>

  <div class="container advanced">
    <h3>Risultati per: <span class="">{{ store.inputText  }}</span></h3>

    <form action="" class="d-flex">

      <div class="mb-5">
                  <h5 class="mb-3">FILTRI</h5>

                  <!-- INPUT RANGE -->
                  <div class="range-slider">
                    <span id="rs-bullet" class="rs-label">{{ store.rangeValue }}</span>
                    <input id="rs-range-line" class="rs-range" type="range" v-model="store.rangeValue"  min="0" max="200" step="10" @change="searchApartments()">
                    
                  </div>
                  
                  <div class="box-minmax">
                    <span>0</span><span>200</span>
                  </div>

                  <div class="d-grid gap-2">
                    <!-- Checkboxes -->
                    <div class="d-flex flex-wrap mt-4">
                    
                    <div class="form-check" v-for=" service in store.arrServices" :key="service.id">
                      <input class="form-check-input" type="checkbox" value="service.id" id="jobTitleCheckbox1" @click="refreshSearch(service.id)">
                      <label class="form-check-label d-flex" for="jobTitleCheckbox1">{{service.name}} <span class="ms-auto"></span></label>
                    </div>

                  </div>
                </div>

                  
                </div>
    </form>
    <!-- Cards container -->
    <div class="container-card d-flex flex-wrap justify-content-center">

      <!-- Single card -->
      <div
        class="boolbnb-card active reveal"
        v-for="(apartment, index) in arrSearch"
        :key="index"
        :class="{'fade-left': inSequence(1, index + 1, 3), 'fade-top': inSequence(2, index + 1, 3), 'fade-right': inSequence(3, index + 1, 3)}">

          <img :src=" 'http://127.0.0.1:8000/storage/' +  apartment.cover_image ">
          <h3>{{ apartment.title }}</h3>
          <p>{{ apartment.address }}</p>
          <h6><strong>{{ apartment.price }} &euro;</strong> a notte</h6>

          <span><router-link :to="{name:'detailApartment', params:{slug:apartment.slug}}">Dettaglio</router-link></span>
          
      </div>

    </div>
  </div>
</template>


<style lang="scss" scoped>
.advanced{
  h3{
    margin-top: 80px;
  }
  .form-check{
    margin-right: 40px;
    .ms-auto{
      margin-left: 5px !important;
    }
  }
}
.container-card{
  width: 100%;
  height: 100%;
  .boolbnb-card{
    flex-basis: 30%;
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


.box-minmax{
  margin-top: 10px;
  width: 608px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: black;
  span:first-child{
    margin-left: 10px;
  }
}

.rs-range {
  margin-top: 29px;
  width: 600px;
  appearance: none;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    box-shadow: none;
    background: #3fa9e4;
    border-radius: 0px;
    border: 0px solid #010101;
  }
  &::-moz-range-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    box-shadow: none;
    background: #3fa9e4;
    border-radius: 0px;
    border: 0px solid #010101;
  }

  &::-webkit-slider-thumb {
    box-shadow: none;
    border: 0px solid #ffffff;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.25);
    height: 42px;
    width: 22px;
    border-radius: 22px;
    background: #3fa9e4;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -20px;
  }
  &::-moz-range-thumb{
    box-shadow: none;
    border: 0px solid #3fa9e4;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.25);
    height: 42px;
    width: 22px;
    border-radius: 22px;
    background: #3fa9e4;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    margin-top: -20px;
  }
  &::-moz-focus-outer {
    border: 0;
  }
}
.rs-label {
  position: relative;
  transform-origin: center center;
  display: block;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
  padding-top: 5px;
  box-sizing: border-box;
  border: 2px solid #3fa9e4;
  margin-top: 10px;
  left: attr(value);
  color: #3fa9e4;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 20px;
  &::after {
    content: "KM";
    display: block;
    font-size: 15px;
    letter-spacing: 0.07em;
    margin-top: -2px;
  } 
}
</style>

