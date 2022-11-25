
import axios from "axios"
const brend = {
  state: () => ({
    brends:[],
    brend:{}
  }),
  getters: {
    brends(state){
        return state.brends
    },
    brend(state){
        return state.brend
    }
  },
  mutations: {
    brends(state,payload){
      state.brends = payload  
  }
  },
  actions: {
    getAllBrend(context){
      axios.get(`${context.getters.url}/brend/api/allbrend`)
      .then(res => {
        if(res.status === 200)
        context.commit('brends',res.data)
      })
    }
  },
  
}
export default brend
