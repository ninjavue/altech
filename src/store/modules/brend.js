
import axios from "axios"
const brend = {
  state: () => ({
    brends: [],
    brend: {},
    brendId:[]
  }),
  getters: {
    brends(state) {
      return state.brends
    },
    brend(state) {
      return state.brend
    },
    brendId(state) {
      return state.brendId
    }
  },
  mutations: {
    brends(state, payload) {
      state.brends = payload
    },
    brendId(state,payload){
      state.brendId = payload
    }
  },
  actions: {
    getAllBrend(context) {
      axios.get(`${context.getters.url}/brend/api/allbrend`)
        .then(res => {
          if (res.status === 200)
            context.commit('brends', res.data)
        })
    },
    getBrendId(context,payload){
      axios.get(`${context.getters.url}/footer/brend/${payload}`)
      .then(res => {
        if(res.status === 200){
          console.log(res.data);
          context.commit('brendId',res.data)
        }
      })
    }
  },

}
export default brend
