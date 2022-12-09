
import axios from "axios"
const shops = {
  state: () => ({
    shops: [],
    shop: {},
    subcategories: [],
    productes: [],
    otheres:[], 
    id:''
  }),
  getters: {
    shops(state) {
      return state.shops
    },
    shop(state) {
      return state.shop
    },
    subcategories(state) {
      return state.subcategories
    },
    productes(state) {
      return state.productes
    },
    otheres(state) {
      return state.otheres
    },
    id(state){
      return state.id
    }
  },
  mutations: {
    shops(state, payload) {
      state.shops = payload
    },
    subcategories(state, payload) {
      state.subcategories = payload.subcategory
    },
    productes(state, payload) {
      state.productes = payload.product
    },
    otheres(state, payload) {
      state.otheres = payload.others
    },
    id(state, payload){
      state.id = payload
      console.log(payload)
    }
  },
  actions: {
    getProduct(context, payload) {
      axios.get(`${context.getters.url}/product/view/${payload}`)
        .then(res => {
          if (res.status === 200) {
            context.commit('productes', res.data)
            context.commit('id',payload)
          }
        })
    },
    getProducts(context, payload) {
      axios.get(`${context.getters.url}/product/view/${payload}`)
        .then(res => {
          if (res.status === 200) {
            console.log(res.data);
            context.commit('otheres', res.data)
          }
        })
    },
    getAllShop(context) {
      axios.get(`${context.getters.url}/header`)
        .then(res => {
          if (res.status === 200)
            context.commit('shops', res.data)
        })
    },
    getSubcategories(context, payload) {
      axios.get(`${context.getters.url}/category/get/${payload}`)
        .then(res => {
          if (res.status === 200) {
            context.commit('subcategories', res.data)
          }
        })
    }

  },

}
export default shops
