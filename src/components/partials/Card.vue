
<script>

export default {
  name: 'Card',
  props:{
    img: String,
    type: String,
    name: String,
  }
}
</script>

<template>
  <div class="text-center mx-2 mb-2 col">
    <img class="mb-3 " :src="img" :alt="name">
    <h5>{{name}}</h5>
    <span>{{type}}</span>

  </div>
</template>

<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;

  div{
    background-color: $bg-main;
    width: 220px;
    padding: 0 !important;
    img{
      width: 220px;
    }

    h5{
      color: white;
    }
  }
</style>