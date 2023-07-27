import { reactive } from "vue";


export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/",
  arrApartments : [],
  arrServices: [],
  servicesToSearch: [],
  rangeValue: 20,
  inputText: '',
  cityClicked: '',
  imageUrl: "http://127.0.0.1:8000/storage/",
  messageForm: {
    apartment_id: '',
    sender_name: '',
    sender_lastname: '',
    sender_email: '',
    text: '',
  }
})



