import axios from 'axios'
import  cookie from 'vue-cookies'




const cart = {
    state: () => ({
        carts:[],
        searchProducts:[]
        
    }),
    getters:{
        carts(state){
            return state.carts
        },
        search(state){
            return state.searchProducts
        }
    },
    mutations:{
        carts(state,payload){
            state.carts = payload
        },
        search(state,payload){
            state.searchProducts = payload
            console.log(payload, 'payload')
        }
    },
    actions:{
     getCart(context){
        let list = []
        if(cookie.isKey('cartapp')){
            list = cookie.get('cartapp')
            let ids = []
            list.forEach(item => {
                ids.push(item._id)
            });
            axios.post(`${context.getters.url}/product/need`,{favs:list})
            .then(res => {
                if(res.data.length>0){
                    res.data =res.data.map(item => {
                        let obj = list.find(product => item._id === product._id)
                        if(obj){
                            item.count = obj.count
                        }
                        else{
                            item.count = 0
                        }
                        return item
                    })
                    context.commit('carts',res.data)
                }
            })
        }
     },
     searchProducts(context,payload){
        axios.get(`${context.getters.url}/product/search/${payload}`)
        .then(res => {
            if(res.status === 200){
                context.commit('search',res.data)
            }
        })
     }
    }
}

export default cart