import { reactive } from "vue";


export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/",
  arrApartments : [],
  arrServices: [],
  servicesToSearch: [],
  rangeValue: 20,
  inputText: '',
  imageUrl: "http://127.0.0.1:8000/storage/"
})



