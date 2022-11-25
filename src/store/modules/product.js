
import axios from "axios"
const product = {
  state: () => ({
    products:[],
    product:{}
  }),
  getters: {
    products(state){
        return state.products
    },
    product(state){
        return state.product
    }
  },
  mutations: {
    products(state,payload){
      state.products = payload  
  }
  },
  actions: {
    getAllProduct(context){
      axios.get(`${context.getters.url}/product/last`)
      .then(res => {
        if(res.status === 200)
        context.commit('products',res.data)
      })
    },
    getAllProducts(context){
      axios.get(`${context.getters.url}/product/all`)
      .then(res => {
        context.commit('products',res.data)
      })
    }
  },
  
}
export default product
