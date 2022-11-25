<template>
  
  <div class="auto mt-70 mb-20">
    <div class="container">
        <div class="text mb-30">Shop By Categories</div>
        <div class="row">
            <div class="col-2" v-for="category of categories" :key="category._id">
                <div class="buy">
                    <img :src="`${url}/${category.img}`" alt="">
                    <div class="fz-18">
                       {{category.title}}
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
        categories(){
        return this.$store.getters.categories
    },
    },
    mounted(){
        this.$store.dispatch('getAllCategory')
    }
}
</script>

<style lang="scss">
@import '@/styles/components/home/shop.scss';
</style>