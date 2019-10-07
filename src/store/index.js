import Vuex from '../../dist/vuex'
import Vue from '../../dist/vue';
console.log('Vuex', Vuex)

Vue.use(Vuex)

const shops = {
  state: {
    shopName: 'Nelson'
  },
  actions: {
    fetchShop () {
      console.log('fetch shop')
    }
  }
}

const timer = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
}

export default new Vuex.Store({
  modules: {
    shops,
    timer
  }
})