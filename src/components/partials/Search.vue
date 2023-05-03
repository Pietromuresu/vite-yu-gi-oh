<script>
import {store} from '../../assets/data/store';
export default {
name: 'Search',

data(){
  return{
    store,

  }
}
}
</script> 

<template>


    <select v-model="store.typeOf"  name="filterBy" id="filter">

      <option value="" >Select a type</option>
      <option  v-for="typeOf in store.cardType" :key="typeOf" :value="typeOf">{{ typeOf }}</option>

    </select>
    <button class="btn border ms-4" @click="$emit('searchForType')">Search</button>
  
  </template>

<style lang="scss" scoped>
  select{
    width: 200px;
    height: 30px;
    border-radius: 5px;
  }

  button{
    &:hover{
      background-color: lighten($color: #D48F38, $amount: 12%);
    }
  }
</style>