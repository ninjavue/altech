<template>
  <div class="home">
    <GameItem/>
    <ShopsBox/>
    <ProductBox />
    <NewsBox/>
    <ProProduct/>
    <TexnologyItem/>
    <WatchBoxs/>
    <CosmeticBox/>
    <RealBox/>
    <FoodBox/>
    <SupportBox />
  </div>
</template>

<script>

import GameItem from '@/components/home/GameItem.vue';
import ShopsBox from '@/components/home/ShopsBox.vue';
import ProductBox from '@/components/home/ProductBox.vue';
import NewsBox from '@/components/home/NewsBox.vue';
import ProProduct from '@/components/home/ProProduct.vue';
import TexnologyItem from '@/components/home/TexnologyItem.vue';
import WatchBoxs from '@/components/home/WatchBoxs.vue';
import CosmeticBox from '@/components/home/CosmeticBox.vue';
import RealBox from '@/components/home/RealBox.vue';
import FoodBox from '@/components/home/FoodBox.vue';
import SupportBox from '@/components/home/SupportBox.vue';

export default {
  name: 'HomeView',
  components: {
    GameItem,
    ShopsBox,
    ProductBox,
    NewsBox,
    ProProduct,
    TexnologyItem,
    WatchBoxs,
    CosmeticBox,
    RealBox,
    FoodBox,
    SupportBox
}
}
</script>

