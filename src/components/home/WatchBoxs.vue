<template>
  <div class="container">
        <div class="technolgy">
            <div class="d-flex mt-30">
            <div class="text">Watch</div>
            <ul class="technolgy-menu">
                <li><router-link to="/">All</router-link></li>
                <li><router-link to="/">Men's watch</router-link></li>
                <li><router-link to="/">Women's Watches</router-link></li>
                <li><router-link to="/">Smart watch</router-link></li>
                
            </ul>
        </div>
        </div>
        <div class="watch">
            <div class="technolgy-bottom">
        <ProductBox />
       </div>
        </div>
  </div>
</template>

<script>
import ProductBox from './ProductBox.vue';

export default {
    components: { ProductBox }
}
</script>

<style>

</style>