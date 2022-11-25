<template>
  <div class="col-20" v-for="product,index of products" :key="index">
    <div class="product">
    <div class="row">
        <div class="col-12">
        <div class="product-box">
            <router-link :to="`/product/view/${product._id}`">
              <img :src="`${url}/${product.photos[0]}`" alt="">
            </router-link>
        </div>
        </div>
        <div class="col-12">
        <div class="product-title">
            <div class="name">
           <a :href="`/product/view/${product._id}`">{{product.title}}</a>
            </div>
            <div class="price"><a :href="`/product/view/${product._id}`">{{product.price.toLocaleString()}} so'm</a></div>
            <div class="product-bottom">
            <a :href="`/product/view/${product._id}`">{{product.discription}}</a>
            </div>
        </div>
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
    products(){
      return this.$store.getters.products
    }
  },
  mounted(){
      this.$store.dispatch('getAllProduct')
    },

}
</script>

<style lang="scss">
@import '@/styles/components/home/product.scss';
</style>