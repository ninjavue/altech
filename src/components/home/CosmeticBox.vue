<template>
    <div class="container">
          <div class="technolgy">
              <div class="d-flex mb-30">
              <div class="text">Cosmetics</div>
              <ul class="technolgy-menu">
                  <li><router-link to="/">All</router-link></li>
                  <li><router-link to="/">Lotion</router-link></li>
                  <li><router-link to="/">Mask</router-link></li>
                  <li><router-link to="/">Perfume</router-link></li>
                  
              </ul>
          </div>
          </div>
          <div class="cosmetic mb-90">
             <div class="row">
                <div class="col-3" v-for="random of randomproduct" :key="random._id">
                    <div class="cosmetic-img">
                        <img :src="`${url}/${random.photos[0]}`" alt="">
                    </div>
                    <div class="cosmetic-title">{{random.title}}</div>
                    <div class="cosmetic-price">{{random.price.toLocaleString()}} so'm</div>
                    <div class="cosmetic-text">by <span>CO., LTD Baby Girl</span></div>
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
      mounted() {
        this.$store.dispatch('getAllRandom')
      },
  }
  </script>
  
  <style lang="scss">
  @import '@/styles/components/home/cosmetic.scss';
  </style>