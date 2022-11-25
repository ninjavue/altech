  <template>
    <div class="sticky">
      <div class="header">
      <div class="container">
          <div class="head">
              <div class="social">
                  <router-link to="/"><img src="../../assets/icons/facebook.svg" alt=""></router-link>
                  <router-link to="/"><img src="../../assets/icons/linkedin.svg" alt=""></router-link>
                  <router-link to="/"><img src="../../assets/icons/tiwiter.svg" alt=""></router-link>
                  <router-link to="/"><img src="../../assets/icons/mail.svg" alt=""></router-link>
              </div>
              <ul class="d-flex">
                  <li><router-link to="/">Introduce.</router-link></li>
                  <li><router-link to="/">Partner Incentives.</router-link></li>
                  <li><router-link to="/">Promotion.</router-link></li>
                  <li><router-link to="/">Contact.</router-link></li>
                  <li><router-link to="/">Frequently asked questions</router-link></li>
              </ul>
          </div>
          <div class="body">
            <div class="logo">
              <img src="../../assets/img/logo.png" alt="">
            </div>
            <label for="select" class="label">
              <input v-model="msg" type="text" class="input" placeholder="What are you looking for?">
              
            </label>
            
            <button class="btn" type="submit">Search</button>
            <input type="checkbox" name="" id="checked">
            <label class="body-like" for="checked"></label>
           <div  class="body-cart" @click="togle=!togle"> <img src="../../assets/icons/cart.svg" alt=""> <span>3</span></div>
           <div :class="`body-cart-dropdown ${togle?'active':''}`">

            <button class="btn big bg-black">View and Edit Shopping Cart</button>
            <button class="btn big">Payment Process</button>
           </div>
          </div>
      </div>
    </div>
    <div class="bg-wight">
      <div class="container">
    <div class="foot">
      <img src="../../assets/icons/humbork.svg" alt="" @click="toggle=!toggle">
              <div  class="foot__logo" @click="toggle=!toggle" >
                Category
                <img src="../../assets/icons/allow.svg" alt="" :class="`${toggle?'rotate':''}`">
              </div>
             
              <ul class="foot__menu">
                <li><router-link to="/" class="active">Home</router-link></li>
                <li><router-link to="/product">New Product
                  <img src="../../assets/icons/allow.svg" alt="">
                </router-link></li>
                <li><router-link to="/product/view">Promotion</router-link></li>
                <div class="btn--danger mr-90">HOT</div>
                <img src="../../assets/icons/truck.svg" alt="">
                <li><router-link to="/">Track Your Order</router-link></li>
                <img src="../../assets/icons/person.svg" alt="">
                <li><router-link to="/">Sign In/Register</router-link></li>
              </ul>
            </div>
          </div>
          
    </div>
    <div  :class="`foot-dropdown ${toggle?'active':toggle}`">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="foot-dropdown-box">
              <div class="foot-dropdown-box-title"  v-for="category,index of shops" :key="index" >
                <div @click="send(category._id)" class="d-flex jastify-content-center align-items-center ">
                  <img  :src="`${url}/${category.icon}`" alt="" class="img"> 
                  <div>{{category.title}}</div>
                  {{msg}}
                </div>
              </div>
                    </div>
                  </div>
                  <span class="foot-dropdown-border"></span>
                  <div class="col-small-9">
                    <div class="foot-dropdown-box" v-for="subcategory,index of subcategories" :key="subcategory._id">
                      <div class="d-flex">
                        <div class="col-4"><div v-show="index<8" class="foot-dropdown-box-sub">{{subcategory.title}}</div></div>
                        <div class="col-4 mt-400"><div v-if="index>8 && index<15" class="foot-dropdown-box-sub">{{subcategory.title}}</div></div>
                        <div class="col-4 mt-800"><div v-show="index>15&&index<22" class="foot-dropdown-box-sub">{{subcategory.title}}</div></div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
    </div>
  </template>

  <script>
  export default {
      data() {
        return {
          toggle:false,
          togle:false,
          msg:''
          
        }
      },
      methods: {
        send(id){
          this.$store.dispatch('getSubcategories',id)
        }
      },
      computed:{
        url(){
            return this.$store.getters.url
        },
        shops(){
        return this.$store.getters.shops
        },
        subcategories(){
          return this.$store.getters.subcategories
        }
      },
    mounted(){
        this.$store.dispatch('getAllShop')
    }
  }
  </script>

  <style lang="scss">
  @import '@/styles/components/header.scss';
  </style>