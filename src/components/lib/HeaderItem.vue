<template>
  <div class="sticky">
    <div class="header">
      <div class="containers">
        <div class="head">
          <div class="social">
            <a href="#"><img src="../../assets/icons/facebook.svg" alt=""></a>
            <a href="#"><img src="../../assets/icons/linkedin.svg" alt=""></a>
            <a href="#"><img src="../../assets/icons/tiwiter.svg" alt=""></a>
            <a href="mailto:customer@ftribe.com"><img src="../../assets/icons/mail.svg" alt=""></a>
          </div>
          <ul class="d-flex">
            <li>
              <router-link to="/">Introduce.</router-link>
            </li>
            <li>
              <router-link to="/">Partner Incentives.</router-link>
            </li>
            <li>
              <router-link to="/">Promotion.</router-link>
            </li>
            <li>
              <router-link to="/">Contact.</router-link>
            </li>
            <li>
              <router-link to="/" class="dn-768">Frequently asked questions</router-link>
            </li>
          </ul>
        </div>
        <div class="body">
          <div :class="`logo ${toglee||title?'dn':''}`" >
            <img src="../../assets/img/logo.png" alt="">
          </div>
          <div :class="`search ml-a ${toglee ||title?'active':''}`">
            <button class="button-toggle" @click="close">
            <span></span>
            </button>
            <label for="select" class="label">
            <input v-model="title" @input="serchProducts" type="text" class="input"
              placeholder="What are you looking for?">
          </label>
          <div v-if="title" class="search-box">
            <div @click="close" class=" d-flex justify-content-center align-items-center" v-for="item of search"
              :key="item._id">
              <div class="search-boxs d-flex justify-content-center align-items-center" @click="submit(item._id)">
                <router-link class="search-box-img" :to="`/product/view`">
                <img :src="`${url}/${item.photos[0]}`" alt="">
                </router-link>
              <div class="ml-40">
                <div class="search-box-title">
                  {{ item.title }}
                </div>
                <div class="search-box-price">
                  Price: {{ item.price }} so'm
                </div>
              </div>
              </div>
            </div>
          </div>
          </div>
          <button @click="serchProducts" class="btn  dn-768 ml-30" type="submit">Search</button> 
          <input type="checkbox" name="" id="checked">
          <label class="body-like dn-768" for="checked"></label>
          <div :class="`search-icon ml-a ${toglee||title?'dn':''}`" @click="toglee = !toglee">
            <img src="@/assets/icons/search.svg" alt="">
          </div>
          <div :class="`body-cart ml-768 ${toglee||title?'dn':''}`" @click="togle = !togle"> <img src="../../assets/icons/cart.svg" alt="">
            <span>{{ carts.length }}</span>
          </div>
          <div :class="`body-cart-dropdown ${togle?'active':''}`">
            <div class="scrols">
              <button @click="togle = !togle">
                <span></span>
              </button>
              <div  v-for="cart of carts" :key="cart._id">
                <div class="carts-boxs d-flex justify-content-center align-items-center"
                @click="submit(cart._id)"
                >
                  <router-link :to="`/product/view`" class="cart-boxs-img">
                  <img :src="`${url}/${cart.photos[0]}`" alt="">
                  </router-link>
                <router-link :to="`/product/view`" class="ml-30 carts">
                  <div class="cart-boxs-title">
                    {{ cart.title }}
                  </div>
                  <div class="cart-boxs-price"><span>Price: </span>{{ cart.price.toLocaleString() }} USD</div>
                  <div class="cart-boxs-num">
                    Buyurtma: {{ cart.count }} ta
                  </div>
                </router-link>

                </div>
              </div>
            </div>
            <button class="btn big bg-black">View and Edit Shopping Cart</button>
            <button class="btn big">Payment Process</button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-wight">
      <div class="container">
        <div class="foot">
          <img src="../../assets/icons/humbork.svg" alt="" @click="toggle = !toggle">
          <div class="foot__logo" @click="toggle = !toggle">
            Category
            <img src="../../assets/icons/allow.svg" alt="" :class="`${toggle ? 'rotate' : ''}`">
          </div>

          <ul class="foot__menu gap-0">
            <li>
              <router-link to="/" class=" ml-768">Home</router-link>
            </li>
            <li>
              <router-link to="/product"><span class="dn-440">New </span>Product
                <img class="dn-440" src="../../assets/icons/allow.svg" alt="">
              </router-link>
            </li>
            <li class="dn-1024">
              <router-link class="dn-768" to="">Promotion</router-link>
            </li>
            <div class="btn--danger mr-90 dn-1024">HOT</div>
            <img class=" dn-440" src="../../assets/icons/truck.svg" alt="">
            <li>
              <router-link class="dn-768" to="/">Track Your Order</router-link>
            </li>
            <img class=" dn-440" src="../../assets/icons/person.svg" alt="">
            <li>
              <router-link class="dn-768" to="/">Sign In/Register</router-link>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <div :class="`foot-dropdown ${toggle ? 'active' : toggle}`">
      <div class="container">
        <div class="row">
          <div class="col-3 col-sl-12">
            <div class="foot-dropdown-box flex">
              <div class="flex">
                <div class="foot-dropdown-box-title" v-for="category, index of shops" :key="index">
                <div @click="send(category._id)" class="d-flex jastify-content-center align-items-center ">
                  <img :src="`${url}/${category.icon}`" alt="" class="img ">
                  <div class="dn-768">{{ category.title }}</div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <span class="foot-dropdown-border"></span>
          <div class="col-small-9 col-sl-12">
            <div class="foot-dropdown-box" v-for="subcategory, index of subcategories" :key="subcategory._id">
              <div class="d-flex">
                <div class="col-4">
                  <div v-show="index < 8" class="foot-dropdown-box-sub" @click="`${title = subcategory.title}&&${toggle = !toggle}`">{{ subcategory.title
                  }}
                  </div>
                </div>
                <div class="col-4 mt-400">
                  <div v-if="index > 8 && index < 15" class="foot-dropdown-box-sub" @click="`${title = subcategory.title}&&${toggle = !toggle}`">
                    {{ subcategory.title }}</div>
                </div>
                <div class="col-4 mt-800">
                  <div v-show="index > 15 && index < 22" class="foot-dropdown-box-sub" @click="`${title = subcategory.title}&&${toggle = !toggle}`">
                    {{ subcategory.title }}</div>
                </div>
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
      toggle: false,
      togle: false,
      toglee: false,
      title: '',


    }
  },
  methods: {
    send(id) {
      this.$store.dispatch('getSubcategories', id)
    },
    serchProducts() {
      this.$store.dispatch('searchProducts', this.title)
    },
    clickOutside(event){
      if(!this.$el.contains(event.target)){
        this.title  = '',
        this.toggle = false,
        this.togle = false
      }
      if(this.toggle==true){
        this.togle =false
      }
      if(this.togle==true){
        this.toggle =false
      }
    },
    submit(id){
      this.$store.dispatch('getProduct',id)
      if(this.togle ==true){
        this.togle = false
      }
    },
    close(){
      if(this.title.length > 0){
        this.title = ''
        this.toglee = false
      }
      this.toglee = false
    }
  },
  computed: {
    url() {
      return this.$store.getters.url
    },
    shops() {
      return this.$store.getters.shops
    },
    subcategories() {
      return this.$store.getters.subcategories
    },
    carts() {
      return this.$store.getters.carts
    },
    search() {
      return this.$store.getters.search
    },
  },
  mounted() {
    this.$store.dispatch('getAllShop')
    this.$store.dispatch('getCart')
    this.$store.dispatch('searchProducts')


    document.addEventListener('click',this.clickOutside)
  },
  unmounted(){
      document.removeEventListener('click',this.clickOutside)

  } 
}
</script>

<style lang="scss">
@import '@/styles/components/header.scss';
</style>