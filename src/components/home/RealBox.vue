<template>
    <div class="container">
          <div class="technolgy">
              <div class="d-flex mb-30">
              <div class="text">Real Estate</div>
              <ul class="technolgy-menu">
                  <li><router-link to="/">All</router-link></li>
                  <li><router-link to="/">House</router-link></li>
                  <li><router-link to="/">Land</router-link></li>
                  <li><router-link to="/">House for rent</router-link></li>
                  <li><router-link to="/">Land for rent</router-link></li>
                  <li><router-link to="/">Project</router-link></li>
                  
              </ul>
          </div>
          </div>
          <div class="real mb-90">
             <div class="row">
                <div class="col-20 p" v-for="product of lastproducts" :key="product._id">
                    <div class="real-img">
                        <img :src="`${url}/${product.img}`" alt="">
                    </div>
                    <div class="real-title">{{product.title}}</div>
                    <div class="real-price">{{product.price.toLocaleString()}} so'm</div>
                    <div class="real-text">by <span>Flower Real Estate</span></div>
                </div>
             </div>
          </div>
    </div>
  </template>
  
  <script>
  
  export default {
      computed:{
        url(){
            return this.$store.getters.url
        },
        lastproducts(){
           return this.$store.getters.lastproducts
        }

      },
      mounted() {
        this.$store.dispatch('getAllLastproduct')
      },
  }
  </script>
  
  <style lang="scss">
  @import '@/styles/components/home/real.scss';
  </style>