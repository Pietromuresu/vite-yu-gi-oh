import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  apiSearch: "",
  yuGiOhCards: [],
  loading: true,
  cardType: [],
  typeOf: '',
  offset: 0,
  num: 20
})