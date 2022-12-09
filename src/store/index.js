import { createStore } from 'vuex'
import product from './modules/product'
import brend from './modules/brend'
import category from './modules/category'
import shop from './modules/shop'
import lastproduct from './modules/lastproduct'
import random from './modules/random'
import cart from './modules/cart'

export default createStore({
  state: {
    url:'http://5.182.26.89:2023'
  },
  getters: {
    url(state){
      return state.url
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    product,brend,category,shop,lastproduct,random,cart
  }
})
