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
  <select name="filterBy" id="filter">
    <option value="" selected>Select a type</option>
    <option v-for="typeOf in store.cardType" :key="typeOf" :value="typeOf">{{ typeOf }}</option>
  </select>
</template>

<style lang="scss" scoped>
  select{
    width: 200px;
    height: 30px;
    border-radius: 5px;
  }
</style>