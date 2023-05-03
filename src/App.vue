<script>
import { store } from "./assets/data/store";

import Search from './components/partials/Search.vue'
import Header from './components/Header.vue'; 
import Main from './components/Main.vue'; 
import Footer from './components/Footer.vue'; 
import axios from 'axios';
export default {
name: 'App',
components:{
  Header,
  Main,
  Footer,
  Search
  
},

data() {
  return{
    store
  }
},

methods:{
  getApi(){
    store.loading = true

    // dato che non è possibile far comparire tutte le carte quando cerchiamo un valore nullo ho deciso di inserire ua condizione che cambia l'url che viene passato ad axios
    if(store.typeOf === ''){
      store.apiSearch = store.apiUrl
    }else {
      store.apiSearch = store.apiUrl + `?type=${store.typeOf}`
        }

    axios.get(store.apiSearch, {
      params:{
        num: store.num,
        offset: store.offset
      }
    })
    .then(result => {
      store.yuGiOhCards = result.data;
      console.log(store.yuGiOhCards)
      store.loading = false
      console.log(store.apiSearch);
    })
  },
  // creo questa funzione perchè se popolassi la select con getApi riceverei solo i types delle card che sono state caricate invece separandoli prendo l'intero array e lo ispeziono per trovare tutti i types
  getAllTypes(){
    axios.get(store.apiUrl)
      .then(result => {
        if(store.cardType.length === 0){
            result.data.data.forEach(element => {
              if(!store.cardType.includes(element.type)){
                store.cardType.push(element.type)
              }         
            })
          }
      })
  }
},

mounted(){
  this.getAllTypes()
  store.apiSearch = store.apiUrl
  this.getApi()
}

}
</script>

<template>
  <Header />
  <Main @searchForReal="this.getApi()" />
  <Footer />
</template>

<style lang="scss" >
@import "bootstrap/scss/bootstrap.scss";
@import './scss/partials/general';
@import './scss/partials/vars';


</style>