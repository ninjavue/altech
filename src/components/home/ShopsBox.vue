<template>
  
  <div class="auto mt-70 mb-20">
    <div class="container">
        <div class="text mb-30">Shop By Categories</div>
        <Splide :options="{
            perPage:6,
            type:'loop',
            autoplay:true,
            breakpoints:{
                1030:{
                    perPage:4.5
                },
                770:{
                    perPage:3.5
                },
                610:{
                    perPage:3
                },
                440:{
                    perPage:2
                }
            }
        }">
            <SplideSlide v-for="category of categories" :key="category._id">
                <div class="buy">
                    <img :src="`${url}/${category.img}`" alt="">
                    <div class="fz-18">
                       {{category.title}}
                    </div>
                </div>
            </SplideSlide>
        </Splide>
            
        </div>
    </div>
</template>

<script>

import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
    components: {
    Splide,
    SplideSlide,
     },
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
.auto{
    .splide__arrow{
        display: none;
    }
}
</style>