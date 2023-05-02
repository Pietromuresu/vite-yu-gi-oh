<script>
import { store } from "./assets/data/store"


import Header from './components/Header.vue'; 
import Main from './components/Main.vue'; 
import Footer from './components/Footer.vue'; 
import axios from 'axios';
export default {
name: 'App',
components:{
  Header,
  Main,
  Footer
},

data() {
  return{
    store
  }
},

methods:{
  getApi(){
    axios.get(store.apiUrl)
    .then(result => {
      store.yuGiOhCards = result.data
      console.log(store.yuGiOhCards);
    })
  }
},

mounted(){
  this.getApi()
}

}
</script>

<template>
  <Header />
  <Main />
  <Footer />
</template>

<style lang="scss" >
@import "bootstrap/scss/bootstrap.scss";
@import './scss/partials/general';
@import './scss/partials/vars';


</style>