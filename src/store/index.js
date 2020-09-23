import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    adress: 'Tylto Station F',
    lat: 48.8361514,
    lng: 2.3713643,
    suggestion :[]
  },
  mutations: {
    GET_ADRESS:(state,link)=>{
      state.adress = link 
    },
    SET_SUGGESTION(state, suggestion){
      state.suggestion = suggestion
      if (state.adress == '') {
        state.suggestion.shift()
      }
    },
    SET_LAT(state, lat){
      state.lat = lat
    },
    SET_LNG(state, lng){
      state.lng = lng
    }
  },
  actions: {
    async loadAdress({ commit, state }){
      if(state.adress != ''){
        await axios
          .get(`https://api-adresse.data.gouv.fr/search/?q=${state.adress}&limit=5`)
          .then(data=>{ 
            let suggestion = data.data.features
            let lat = data.data.features[0].geometry.coordinates[1]
            let lng = data.data.features[0].geometry.coordinates[0]
            commit('SET_SUGGESTION', suggestion)
            commit('SET_LAT', lat)
            commit('SET_LNG', lng)
          })
          .catch(error=>{
            console.log(error);
          })
        }
    }
  },
  modules: {
  }
})
