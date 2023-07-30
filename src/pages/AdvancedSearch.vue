<script>
import { store } from '../data/store';
import axios from 'axios';
import Header from '../components/Header.vue';
import CardItem from '../components/partials/CardItem.vue';
import CardLoader from '../components/partials/CardLoader.vue';

export default {
  components: {
    Header,
    CardItem,
    CardLoader
  },
  name: 'AdvancedSearch',
  data() {
    return {
      store,
      isLoaded: false,
      arrSearch: [],
      arrCount: 0,
      serviceOpen: false
    };
  },
  methods: {
    searchApartments() {
      this.isLoaded = false;
      const requestData = {
        input: store.inputText,
        radius: store.rangeValue,
        services: store.servicesToSearch
      };
      axios.post(store.apiUrl + 'search', requestData)
        .then(response => {
          // console.log(response);
          store.searchedApt = response.data.apartments;
          store.arrServices = response.data.availableServices;
          this.arrSearch = response.data.apartments;
          this.arrCount = response.data.count;
          this.isLoaded = true;
        })
        .catch(error => {
          // console.log(error);
          this.arrSearch = [];
          this.arrCount = 0;
          this.isLoaded = true;
        });
    },
    autoCompleteSearch(){
      const options = {
        autocompleteOptions : {
          key: 'HuISvV9BlBXkZwU8lSoO2N7Wra0h8GlA',
          language: 'it-IT',
          countrySet: 'IT',
          typeahead: 'city',
          resultSet: 'address'
        },
        searchOptions : {
          key: 'HuISvV9BlBXkZwU8lSoO2N7Wra0h8GlA',
          language: 'it-IT',
          limit: 5,
          countrySet: 'IT',
        }
      }
      const ttSearchBox = new tt.plugins.SearchBox(tt.services, options)
      const searchBoxHTML = ttSearchBox.getSearchBoxHTML()
      const searchBoxContainer = document.getElementById('searchbox');
      searchBoxContainer.append(searchBoxHTML);
      searchBoxContainer.children[0].classList.add('w-100');
      searchBoxContainer.children[0].children[0].style.border = '1px solid #0A0F59';
      searchBoxContainer.children[0].children[0].style.borderRadius = '2rem';
      searchBoxContainer.children[0].children[0].children[2].style.color = '#0A0F59';
      searchBoxContainer.children[0].children[0].children[2].style.left = '-15px';
      searchBoxContainer.children[0].children[0].style.flexDirection = 'row-reverse';
      searchBoxContainer.children[0].children[0].children[0].style.cursor = 'pointer';
      searchBoxContainer.children[0].children[0].children[0].addEventListener('click', event => {
        this.searchApartments();
      });
      searchBoxContainer.children[0].children[0].children[3].classList.add('d-none');
      const inputBox = searchBoxHTML.firstChild.children[2];
      inputBox.setAttribute('name', 'address');
      inputBox.setAttribute('autocomplete', 'off');
      inputBox.setAttribute('required', true);
      inputBox.setAttribute('placeholder', 'Cerca per città');
      inputBox.value = store.inputText;
      inputBox.addEventListener('keyup', (event) => {
        store.inputText = event.srcElement.value;
        if (event.key === 'Enter') {
          this.searchApartments();
        } else if (event.key === 'Backspace') {
          if(!event.srcElement.value) {
            store.inputText = '';
            this.searchApartments();
          }
        }
      });
    },	
    getResult(city){
			store.inputText = city;
			this.$router.push({ name: "advanced-search", query: { city: city } });
		},
    refreshSearch(id) {
      if (store.servicesToSearch.includes(id)) {
        store.servicesToSearch.splice(store.servicesToSearch.indexOf(id), 1);
      } else {
        store.servicesToSearch.push(id)
      }
      this.searchApartments();
    },
    resetSearch() {
      if(!store.inputText) {
        this.searchApartments();
      }
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
    },
    toggleServices() {
      this.serviceOpen = !this.serviceOpen;
    }
  },
  mounted() {
    // console.log(store.arrApartments);
    store.servicesToSearch = [];
    store.rangeValue = 20;
    // this.getAllApartments();
    // console.log(this.arrSearch);
    this.searchApartments();

    const rangeSlider = document.getElementById("rs-range-line");
    const rangeBullet = document.getElementById("rs-bullet");
    
    rangeSlider.addEventListener("input", showSliderValue, false);
    

    function showSliderValue() {
      rangeBullet.innerHTML = rangeSlider.value;
    }
    this.autoCompleteSearch();
  }
}
</script>


<template>
  <Header class="header-bg" />

  <div class="container advanced py-5">
    <h2>Utilizza i filtri per affinare la tua ricerca</h2>
    <div class="d-flex flex-column my-4 p-3">
      <h4 class="mb-3">FILTRI</h4>
      <div class="d-flex align-items-md-center flex-column flex-md-row justify-content-between mb-5">
        <!-- TEXT INPUT -->
        <div id="searchbox" class="search-text position-relative mb-3 me-md-5">
        </div>
        <!-- INPUT RANGE -->
        <div class="range-slider d-flex align-items-center py-3">
          <input id="rs-range-line"
            class="rs-range"
            type="range"
            v-model="store.rangeValue"
            min="10"
            max="200"
            step="10"
            @change="searchApartments()">
          <span id="rs-bullet"
            class="rs-label">{{ store.rangeValue }}</span>
        </div>
      </div>
      <div class="services">
        <div class="services-title d-flex justify-content-center gap-2" :class="[serviceOpen ? 'align-items-center' : 'align-items-start']" @click="toggleServices()">
          <h5>SERVIZI</h5>
          <i v-if="serviceOpen" class="fa-solid fa-sort-up"></i>
          <i v-else class="fa-solid fa-sort-down"></i>
        </div>
        <div class="services-display row mt-3 p-5 justify-content-center align-items-center text-center" :hidden="!serviceOpen">
          <div class="form-check col-9 col-md-5 col-lg-3 col-xl-2"
            v-for="service in store.arrServices"
            :key="service.id">
              <input class="form-check-input"
                type="checkbox"
                hidden
                value="service.id"
                :id="'service' + service.id"
                @click="refreshSearch(service.id)">
              <label class="form-check-label"
              :for="'service' + service.id">{{ service.name }}</label>
          </div>
        </div>
      </div>
    </div>
    <!-- Cards container -->

    <div v-show="isLoaded">
      <h4 v-if="!store.inputText">Sono disponibili {{ arrCount }} appartamenti, cerca una città per restringere la tua ricerca</h4>
      <h4 v-else-if="arrCount">La tua ricerca ha prodotto {{ arrCount }} risultati</h4>
      <h4 v-else>Ci dispiace, purtroppo non sono disponibili risultati per la tua ricerca, prova a modificare i filtri per estendere la ricerca</h4>
    </div>
    <div class="container-card d-flex flex-wrap justify-content-center pb-5" v-if="isLoaded">
      <CardItem class="boolbnb-card active reveal"
        v-for="(apartment, index) in arrSearch"
        :key="index"
        :class="{ 'fade-left': inSequence(4, index + 1, 3), 'fade-top': inSequence(5, index + 1, 3), 'fade-right': inSequence(6, index + 1, 3) }"
        :img="'http://127.0.0.1:8000/storage/' + apartment.cover_image"
        :title="apartment.title"
        :address="apartment.address"
        :price="apartment.price"
        :sponsored="apartment.sponsored"
        @click="$router.push('/detail-apartment/' + apartment.slug)" />
    </div>
    <div class="container-card d-flex flex-wrap justify-content-center pb-5" v-else>
      <CardLoader 
      v-for="index in 6" 
      :key="'load' + index" />
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;
body {
  background: white;
  input {
    color: black;
  }
}
.advanced {
  h2 {
    margin-top: 60px;
  }
  .search-text {
    width: 100%;
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
    border: 2px solid $federal_blue;
    // margin-top: 10px;
    left: attr(value);
    color: $federal_blue;
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
  .rs-range {
    margin: 0 2rem;
    width: 80%;
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
      background: $federal_blue;
      border-radius: 0px;
      border: 0px solid #010101;
    }

    &::-moz-range-track {
      width: 100%;
      height: 1px;
      cursor: pointer;
      box-shadow: none;
      background: $federal_blue;
      border-radius: 0px;
      border: 0px solid #010101;
    }

    &::-webkit-slider-thumb {
      box-shadow: none;
      border: 0px solid #ffffff;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
      height: 42px;
      width: 22px;
      border-radius: 22px;
      background: $federal_blue;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -20px;
    }

    &::-moz-range-thumb {
      box-shadow: none;
      border: 0px solid $federal_blue;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
      height: 42px;
      width: 22px;
      border-radius: 22px;
      background: $federal_blue;
      cursor: pointer;
      appearance: none;
      -webkit-appearance: none;
      margin-top: -20px;
    }

    &::-moz-focus-outer {
      border: 0;
    }
  }
  .services {
    user-select: none;
    .services-title {
      cursor: pointer;
    }
    .services-display {
      background: #f7f7f7;
      .form-check {
        padding: 0;
        margin: .5rem;
        label {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 4rem;
          outline: 1px solid $federal_blue;
          outline-offset: -1px;
          padding: .5rem 2rem;
          border-radius: 2rem;
          color: $federal_blue;
          font-weight: bold;
          transition: all .5s linear;
        }
        input:checked + label {
          background: $argentinian_blue;
          color: white;
          outline: none;
          transition: all .5s linear;
        }
      }
    }
  }
}

.container-card {
  width: 100%;
  height: 100%;
}

@media (min-width: 768px){
  .advanced {
    .search-text {
      width: 100%;
      .search-btn{
        font-size: 2.5rem;
      }
    }
    .range-slider {
      width: 60% !important;
    }
  }
}
@media (min-width: 576px){
  .advanced {
    .search-text {
      .search-btn{
        font-size: 2.5rem;
        &.mobile {
          display: none;
        }
        &.desktop {
          display: inline;
        }
      }
    }
  }
}
</style>

