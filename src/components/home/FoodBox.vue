<template>
    <div class="container">
          <div class="technolgy">
              <div class="d-flex mb-30">
              <div class="text">Luxury Food</div>
              <ul class="technolgy-menu">
                  <li><router-link to="/">All</router-link></li>
                  <li><router-link to="/">Drinks - Preparation</router-link></li>
                  <li><router-link to="/">Cereals</router-link></li>
                  <li><router-link to="/">Drink</router-link></li>
                  <li><router-link to="/">Resources</router-link></li>
                  
              </ul>
          </div>
          </div>
          <div class="food mb-90">
             <div class="row">
                <div class="col-3 col-md-4 col-sm-6" v-for="random of randomproduct" :key="random._id">
                    <div @click="submit(random._id)">
                        <router-link class="food-img" :to="`/product/view`">
                        <img :src="`${url}/${random.photos[0]}`" alt="">
                    </router-link>
                    <div class="food-title">{{random.title}}</div>
                    <div class="food-price">{{random.price.toLocaleString()}} so'm</div>
                    <div class="food-text">by <span>Co., Ltd FUJIWA USA</span></div>
                    </div>
                </div>
             </div>
          </div>
    </div>
  </template>
  
  <script>
  
  export default {
      components: {  },
      computed:{
        url(){
            return this.$store.getters.url
        },
        randomproduct(){
            return this.$store.getters.randomproduct
        }
      },
      methods:{
        submit(id){
            this.$store.dispatch('getProduct',id)
        }
      },
      mounted() {
        this.$store.dispatch('getAllRandom')
      },
  }
  </script>
  
  <style lang="scss">
  @import '@/styles/components/home/food.scss';
  </style>