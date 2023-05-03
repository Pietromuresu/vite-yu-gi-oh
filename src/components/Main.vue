<script>
import {store} from "../assets/data/store";

import Search from './partials/Search.vue'; 
import Card from './partials/Card.vue'
import Loading from './partials/Loading.vue'

export default {
name: 'Main',
components:{
  Search,
  Card,
  Loading
},
data(){
  return{
    store,
    
  }
},
methods:{
  
}
}
</script>

<template>
  <div class="main-container">
   
    <div class="container p-4 h-100">
      <Search />
      <Loading v-if="store.loading"/>
      <div v-else class="card-container my-4  p-5">
        <div class="found p-2">
          <h5>Found {{ store.yuGiOhCards.data.length }} cards</h5>
        </div>

        <div class=" mb-4 row justify-content-center">
          <Card v-for="card in store.yuGiOhCards.data" :key="card.id" :name="card.name" :type="card.archetype || card.type" :img="card.card_images[0].image_url"/>
        </div>

      </div>
      
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;
.main-container{
  min-height: 100vh;
  background-color: $bg-main;

  .card-container{

    width: 100%;
    background-color: #fff;
  }
  .found{
    background-color: $almost-black;
    color: #fff;
  }
}


</style>