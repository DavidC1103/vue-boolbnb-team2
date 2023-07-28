<script>
import { store } from '../data/store';
import axios from 'axios';
import Header from '../components/Header.vue';
import CardItem from '../components/partials/CardItem.vue';

export default {
  components: {
    Header,
    CardItem
  },
  name: 'AdvancedSearch',
  data() {
    return {
      store,
      arrSearch: [],
      serviceOpen: false
    };
  },
  methods: {
    getAllApartments() {
      axios.get(store.apiUrl + 'apartments')
        .then(result => {
          store.arrApartments = result.data.total_apartments;
          store.sponsoredApt = result.data.sponsored_apartments;
          store.arrServices = result.data.availableServices;
          this.sortApartments(store.arrApartments);
        });
    },
    searchApartments() {
      const requestData = {
        input: store.inputText,
        radius: store.rangeValue,
        services: store.servicesToSearch
      };
      axios.post(store.apiUrl + 'search', requestData)
        .then(response => {
          store.searchedApt = response.data.apartments;
          this.sortApartments(store.searchedApt);
        });
    },
    sortApartments(array) {
      if (!Array.isArray(array)) {
        this.arrSearch = [];
        return;
      }

      const sponsoredSet = new Set(store.sponsoredApt.map(apartment => apartment.id));
      const sortedApartments = array.map(apartment => {
        const isSponsored = sponsoredSet.has(apartment.id);
        return { ...apartment, isSponsored };
      }).sort((a, b) => {
        const isAInSponsored = sponsoredSet.has(a.id);
        const isBInSponsored = sponsoredSet.has(b.id);

        if (isAInSponsored && isBInSponsored) {
          // Both apartments are in sponsoredApt array, maintain their original order
          return 0;
        } else if (isAInSponsored) {
          // Only apartment A is in sponsoredApt array, prioritize it
          return -1;
        } else if (isBInSponsored) {
          // Only apartment B is in sponsoredApt array, prioritize it
          return 1;
        } else {
          // Both apartments are not in sponsoredApt array, maintain their original order
          return 0;
        }
      });

      this.arrSearch = sortedApartments;
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
        this.sortApartments(store.arrApartments);
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
    store.servicesToSearch = [];
    store.rangeValue = 20;
    this.getAllApartments();
    // console.log(this.arrSearch);
    if(store.inputText) {
      this.searchApartments();
    }

    const rangeSlider = document.getElementById("rs-range-line");
    const rangeBullet = document.getElementById("rs-bullet");
    
    rangeSlider.addEventListener("input", showSliderValue, false);
    

    function showSliderValue() {
      rangeBullet.innerHTML = rangeSlider.value;
    }
  }
}
</script>


<template>
  <Header class="header-bg" />

  <div class="container advanced py-5">
    <h2 v-if="store.inputText">Ecco i risultati per la tua ricerca</h2>
    <h2 v-else>Digita qualcosa per affinare la tua ricerca</h2>
    <div class="d-flex flex-column my-4 p-3">
      <h4 class="mb-3">FILTRI</h4>
      <div class="d-flex align-items-md-center flex-column flex-md-row justify-content-between mb-5">
        <!-- TEXT INPUT -->
        <div class="search-text position-relative mb-3 me-md-5">
          <input class="input-text p-3 w-100"
            type="text"
            v-model="store.inputText"
            placeholder="Cerca per città"
            @keyup.enter="searchApartments()"
            @keyup.delete="resetSearch()">
          <i class="fa-solid fa-magnifying-glass position-absolute search-btn" @click="searchApartments()"></i>
        </div>
        <!-- INPUT RANGE -->
        <div class="range-slider d-flex align-items-center py-3">
          <input id="rs-range-line"
            class="rs-range"
            type="range"
            v-model="store.rangeValue"
            min="0"
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
    <div class="container-card d-flex flex-wrap justify-content-center pb-5">


      <CardItem class="boolbnb-card active reveal"
        v-for="(apartment, index) in arrSearch"
        :key="index"
        :class="{ 'fade-left': inSequence(1, index + 1, 3), 'fade-top': inSequence(2, index + 1, 3), 'fade-right': inSequence(3, index + 1, 3) }"
        :img="'http://127.0.0.1:8000/storage/' + apartment.cover_image"
        :title="apartment.title"
        :address="apartment.address"
        :price="apartment.price"
        :sponsored="apartment.isSponsored"
        @click="$router.push('/detail-apartment/' + apartment.slug)" />

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

.advanced {
  h2 {
    margin-top: 60px;
  }
  .search-text {
    width: 100%;
    .input-text {
      border: 1px solid $federal_blue;
      border-radius: 2rem;
    }

    .search-btn {
      cursor: pointer;
      font-size: 2.5rem;
      color: $federal_blue;
      top: .5rem;
      right: 1rem;
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
  // .box-minmax {
  //   margin-top: 10px;
  //   width: 100%;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   font-size: 20px;
  //   color: $federal_blue;
  // }
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
  }
  .services-display {
    background: #f7f7f7;
  }
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

.container-card {
  width: 100%;
  height: 100%;
}

@media (min-width: 768px){
  .advanced {
    .search-text {
      width: 100%;
    }
    .range-slider {
      width: 60% !important;
    }
  }
}
</style>

