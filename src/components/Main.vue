<script>
import Search from './partials/Search.vue'; 

export default {
name: 'Main',
components:{
  Search
}
}
</script>

<template>
  <div class="main-container">
    <div class="container p-4">
      <Search />

    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;
.main-container{
  background-color: $bg-main;
  height: 100vh;
}

</style>