<template>
    <div class="product">
    <div class="container">
            <div class="row">
                <div class="col-6 col-md-12">
                    <div class="product-box-img">
                        <Splide :options="{
                            type: 'loop',
                            perPage: 1,
                            autoplay: true
                        }">
                            <SplideSlide>
                                <img :src="`${url}/${productes.photos[0]}`" alt="product.img">
                            </SplideSlide>
                            <SplideSlide>
                                <img :src="`${url}/${productes.photos[1]}`" alt="product.img">
                            </SplideSlide>
                            <SplideSlide>
                                <img :src="`${url}/${productes.photos[2]}`" alt="product.img">
                            </SplideSlide>
                        </Splide>
                    </div>
                    <div class="product-box-charac-price price">Total Price: {{ count * productes.price }} so'm</div>
                </div>
                <div class="col-6 col-md-12">
                    <div class="product-box-charac">
                        <div class="product-box-charac-title">
                            {{ productes.title }}
                        </div>
                        <div class="row ml-3">
                            <img src="@/assets/icons/star.svg" alt="star">
                            <img src="@/assets/icons/star.svg" alt="star">
                            <img src="@/assets/icons/star.svg" alt="star">
                            <img src="@/assets/icons/star.svg" alt="star">
                            <img src="@/assets/icons/star.svg" alt="star">
                        </div>
                        <div class="product-box-charac-price">
                            {{ productes.price.toLocaleString() }} so'm
                        </div>
                        <div class="product-box-charac-text">
                            {{ productes.descriptions }}
                        </div>
                        <div class="product-box-charac-text mt-20 mb-20">
                            Color:
                        </div>
                        <div class="product-box-charac-color">
                            <span class="white"></span>
                            <span class="grey"></span>
                            <span class="veyolit"></span>
                            <span class="yellow"></span>
                        </div>
                        <div class="product-box-charac-text mt-70">
                            Amount:
                        </div>
                        <div class="buttons">
                            <button class="cnt" @click="changeCount(-1)">-</button>
                            <button class="count">{{ count }}</button>
                            <button class="cnt" @click="changeCount(1)">+</button>
                            <button class="btn big" @click="add">Add to Cart</button>
                        </div>
                        <div class="d-flex">
                            <div class="product-box-charac-text mt-20">
                                Share:
                            </div>
                            <div class="mt-20 ml-a mr-100 mla">
                                <img src="@/assets/img/facebook.svg" alt="img">
                                <img src="@/assets/img/linkedin.svg" alt="img">
                                <img src="@/assets/img/twitter.svg" alt="img">
                                <img src="@/assets/img/mail.svg" alt="img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
    data() {
        return {
            count: 0
        }
    },
    computed: {
        url() {
            return this.$store.getters.url
        },
        productes() {
            return this.$store.getters.productes
        },
        otheres() {
            return this.$store.getters.otheres
        }

    },
    methods:{
        add(){
            let list = []
            if(this.$cookies.isKey('cartapp')){
                list = this.$cookies.get('cartapp')
            }
            let index = list.findIndex(el => el._id === this.productes._id)
            if(index !== -1){
                list[index].count += this.count
            }else{
                list.push({
                    _id: this.productes._id,
                    count: this.count
                })
            }
            this.count = 0
            this.$cookies.set('cartapp',JSON.stringify(list))
            this.$store.dispatch('getCart')
        },
        changeCount(val){
            if(val < 0 && this.count == 0){
                return false
            }
            this.count += val
        },
        
    },
    mounted() {
        this.$store.dispatch('getProduct')

        document.addEventListener('keydown', (e) => {
        e = e || window.event;
        if(e.keyCode == 116 || e.keyCode == 82){
            e.preventDefault();
    }
});
    },
    components: {
        Splide,
        SplideSlide
    }
}
</script>

<style lang="scss">
@import '@/styles/components/home/product.scss';
</style>