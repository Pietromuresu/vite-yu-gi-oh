<script>
export default {
name: 'Search',

data(){
  return{
    
  }
}
}
</script>

<template>
  <select name="filterBy" id="filter">
    <option value="alien">Alien</option>
  </select>
</template>

<style lang="scss" scoped>
  select{
    width: 200px;
    height: 30px;
    border-radius: 5px;
  }
</style>