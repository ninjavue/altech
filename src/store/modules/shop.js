
import axios from "axios"
const shops = {
  state: () => ({
    shops:[],
    shop:{},
    subcategories:[]
  }),
  getters: {
    shops(state){
        return state.shops
    },
    shop(state){
        return state.shop
    },
    subcategories(state){
     return state.subcategories 
    }
  },
  mutations: {
    shops(state,payload){
      state.shops = payload  
    },
    subcategories(state, payload){
      state.subcategories = payload.subcategory
    }
  },
  actions: {
    getAllShop(context){
      axios.get(`${context.getters.url}/header`)
      .then(res => {
        if(res.status === 200)
        context.commit('shops',res.data)
        console.log(res.data, 'bu res data')
      })
    },
    getSubcategories(context,payload){
      axios.get(`${context.getters.url}/category/get/${payload}`)
      .then(res => {
        if(res.status === 200){
          context.commit('subcategories',res.data)
        }
      })
    }

  },
  
}
export default shops
