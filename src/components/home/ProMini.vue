<template>
  <div class="col-20 col-lg-3 col-md-6" v-for="product, index of products" :key="index">
    <div class="product" @click="submit(product._id)">
          <div class="product-wight">
            <div class="product-box">
            <router-link :to="`/product/view/`">
              <img :src="`${url}/${product.photos[0]}`" alt="">
            </router-link>
          </div>
       
          <div class="product-title">
            <div class="name">
              <a :href="`/product/view/`">{{ product.title }}</a>
            </div>
            <div class="price"><a :href="`/product/view/`">Price: {{ product.price.toLocaleString() }} so'm</a></div>
            <div class="product-bottom">
              <a :href="`/product/view/`">{{ product.discription }}</a>
            </div>
          </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  computed: {
    url() {
      return this.$store.getters.url
    },
    products() {
      return this.$store.getters.products
    }
  },
  methods: {
    submit(id) {
      this.$store.dispatch('getProduct', id)
    }
  },
  mounted() {
    this.$store.dispatch('getAllProduct')
  },

}
</script>

<style lang="scss">
@import '@/styles/components/home/product.scss';
</style>