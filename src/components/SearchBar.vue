<template>
  <div class=searchBar>
    <div class="searchBar__container">
    <input class="searchBar__input" type="text" placeholder="Entrez une adresse"  @focus="setFocus(true)" @blur="setFocus(false)" v-model="adressInput" @keyup="getAdress" />
    <div class="searchBar__suggestions" v-show="isFocus == true && adressInput != ''  ">
      <div class="searchBar__suggestion" v-for="(item, index) in suggestion" :key="index"  @click="selectSuggestion(item.properties.label)">
        <p class="searchBar__suggestion--label">{{item.properties.label}}</p>
        <p class="searchBar__suggestion--type">{{item.properties.type}}</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState  } from 'vuex' ;

export default {
  data() {
    return {
      adressInput:'',
      isFocus : false
    }
  },
  computed:{
    ...mapState(['suggestion'])
    },
  methods: {
    ...mapMutations([
      'GET_ADRESS'
    ]),
    getAdress() {
      this.GET_ADRESS(this.adressInput)
      this.$store.dispatch('loadAdress')
    },
    setFocus(bool) {
      setTimeout(() => {
        this.isFocus = bool;
      }, 100); //create mciro delay to get adress suggestion if the user click on it
    },
    selectSuggestion(name) {
      this.adressInput = name;
      this.getAdress()
    }
  }
};
</script>

<style scoped lang="scss">
.searchBar{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__container{
    width: 80%;
    max-width: 600px;
  }
  &__input{
    display: block;
    width: 100%;
    color: #873bff;
    font-size: 20px;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    padding: 12px; 
    margin-top: 16px;
    background-color: rgba(255,255,255,0.3);
    box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
    transition: .5s;
    &:focus{
      background-color:rgba(255,255,255,1); 
      box-shadow: 0px 0px 16px rgba(0,0,0,0.25);
    }
  }
  &__suggestion{
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    background-color: rgba(255,255,255,1);
    padding: 16px;
    z-index: 2;
    transition: .3s;
    &:hover{
      background-color:rgba(135,59,255,.2); 
    }
    &--label{
      font-weight: bold;
    }
    &--type{
      color: rgba(135,59,255,.8); 
    }
  }
}
</style>
