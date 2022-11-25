
import axios from "axios"
const lastproducts = {
  state: () => ({
    lastproducts:[],
    lastproduct:{}
  }),
  getters: {
    lastproducts(state){
        return state.lastproducts
    },
    lastproduct(state){
        return state.lastproduct
    }
  },
  mutations: {
    lastproducts(state,payload){
      state.lastproducts = payload  
  }
  },
  actions: {
    getAllLastproduct(context){
      axios.get(`${context.getters.url}/product/last`)
      .then(res => {
        if(res.status === 200)
        context.commit('lastproducts',res.data)
      })
    }
  },
  
}
export default lastproducts
