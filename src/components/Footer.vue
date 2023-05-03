<script>
import {store} from '../assets/data/store'
export default {
name: 'Footer',
data() {
  return{
    store
  }
},
methods:{
  nextPrev(value){
      store.offset += value
      this.$emit('seeNextPrev')
  }
}
}
</script>

<template>
  <footer class="d-flex justify-content-center pb-5">
    <button v-if="store.offset" @click="nextPrev(-store.num)" class="btn me-3">Prev</button>
    <button v-if="store.totOffset === 1 " @click="nextPrev(store.num)" class="btn">Next</button>
  </footer>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;
footer{
  background-color: $bg-main;
  button{
    background-color: white;
  }

}
</style>