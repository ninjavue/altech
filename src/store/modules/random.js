
import axios from "axios"
const randomproduct = {
  state: () => ({
    randomproduct:[],
    random:{}
  }),
  getters: {
    randomproduct(state){
        return state.randomproduct
    },
    random(state){
        return state.random
    }
  },
  mutations: {
    randomproduct(state,payload){
      state.randomproduct = payload  
  }
  },
  actions: {
    getAllRandom(context){
      axios.get(`${context.getters.url}/product/api/random`)
      .then(res => {
        if(res.status === 200)
        context.commit('randomproduct',res.data)
      })
    }
  },
  
}
export default randomproduct
