
import axios from "axios"
const categories = {
  state: () => ({
    categories:[],
    category:{}
  }),
  getters: {
    categories(state){
        return state.categories
    },
    category(state){
        return state.category
    }
  },
  mutations: {
    categories(state,payload){
      state.categories = payload  
  }
  },
  actions: {
    getAllCategory(context){
      axios.get(`${context.getters.url}/category/api/allcategory`)
      .then(res => {
        if(res.status === 200)
        context.commit('categories',res.data)
      })
    }
  },
  
}
export default categories
