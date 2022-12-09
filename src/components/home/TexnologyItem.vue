<template>
    <div class="container">
        <div class="technology">
            <div class="d-flex mb-30">
                <div class="text">Technology</div>
                <ul class="technolgy-menu dn-600">
                    <li>
                        <router-link to="/">All</router-link>
                    </li>
                    <li>
                        <router-link to="/">Smart Watch</router-link>
                    </li>
                    <li>
                        <router-link to="/">Laptop</router-link>
                    </li>
                    <li>
                        <router-link to="/">Tablet</router-link>
                    </li>
                    <li>
                        <router-link to="/">Desktop</router-link>
                    </li>
                    <li>
                        <router-link to="/">Accessories</router-link>
                    </li>
                </ul>
            </div>
            <div class="row">
                <div class="col-4 col-lg-6" v-for="shop of shops" :key="shop._id">
                    <div class="row">
                        <div class="col-6 col-sm-12">
                            <div class="technolgy-img">
                                <img :src="`${url}/${shop.img}`" alt="">
                            </div>
                        </div>
                        <div class="col-6 col-sm-12">
                            <div class="technolgy-box">
                                <div class="technolgy-box-title">{{ shop.title }}</div>
                                <div class="technolgy-box-price">{{ shop.price }}</div>
                                <div class="technolgy-box-text">by <span>Co., Ltd Minie Li</span></div>
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
    components: {},
    computed: {
        url() {
            return this.$store.getters.url
        },
        shops() {
            return this.$store.getters.shops
        }
    },
    mounted() {
        this.$store.dispatch('getAllShop')
    },
}
</script>

<style lang="scss">
@import '@/styles/components/home/technolgy.scss';
</style>