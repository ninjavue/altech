<template>
  <div class="product">
    <div class="container">
        <div class="row">
            <ProMini/>
        </div>
    </div>
  </div>
</template>

<script>
import ProMini from './ProMini.vue';

export default {
    props:['products'],
    components: { ProMini },
   
}
</script>

<style lang="scss">
@import '@/styles/components/home/product.scss';
</style>