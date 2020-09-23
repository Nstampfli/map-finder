<template>
  <div class="home">
    <h1 class="home__mainTilte">Entrez une adresse pour connaitre son emplacement</h1>
    <SearchBar/>
    <Map/>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import Map from '@/components/Map.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    Map
  }
}
</script>

<style lang="scss" scoped>
.home {
  font-family: sans-serif;
  width: 100%;
  height: 100vh;
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  align-items: center;
  &__mainTilte{
    margin: 24px;
    color: #873bff;
    font-weight: 600;
    text-align: center;
    font-size: 26px;
  }
}
</style>