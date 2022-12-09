<template>

  <div class="container">
    <div class="products mt-10">
      <div class="row">
        <div class="col-4 dn-600">
          <div class="product-box ">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <div class="text">
                Category
              </div>
              <el-sub-menu index="1">
                <template #title>
                  <span>Real Estate</span>
                </template>
                <el-menu-item-group title="SSD">
                  <el-menu-item index="1-1">128 GB</el-menu-item>
                  <el-menu-item index="1-2">256 GB</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="HARD">
                  <el-menu-item index="1-3">500 GB</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>LAPTOP</template>
                  <el-menu-item index="1-4-1">HP</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-sub-menu index="2">
                <template #title>
                  <span>Technology</span>
                </template>
                <el-menu-item-group title="SSD">
                  <el-menu-item index="1-1">128 GB</el-menu-item>
                  <el-menu-item index="1-2">256 GB</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="HARD">
                  <el-menu-item index="1-3">500 GB</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>LAPTOP</template>
                  <el-menu-item index="1-4-1">HP</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-sub-menu index="3">
                <template #title>
                  <span>Watch</span>
                </template>
                <el-menu-item-group title="SSD">
                  <el-menu-item index="1-1">128 GB</el-menu-item>
                  <el-menu-item index="1-2">256 GB</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="HARD">
                  <el-menu-item index="1-3">500 GB</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>LAPTOP</template>
                  <el-menu-item index="1-4-1">HP</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-sub-menu index="4">
                <template #title>
                  <span>Home & Life</span>
                </template>
                <el-menu-item-group title="SSD">
                  <el-menu-item index="1-1">128 GB</el-menu-item>
                  <el-menu-item index="1-2">256 GB</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="HARD">
                  <el-menu-item index="1-3">500 GB</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>LAPTOP</template>
                  <el-menu-item index="1-4-1">HP</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-sub-menu index="5">
                <template #title>
                  <span>Cosmetic Surgery</span>
                </template>
                <el-menu-item-group title="SSD">
                  <el-menu-item index="1-1">128 GB</el-menu-item>
                  <el-menu-item index="1-2">256 GB</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="HARD">
                  <el-menu-item index="1-3">500 GB</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>LAPTOP</template>
                  <el-menu-item index="1-4-1">HP</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-sub-menu index="6">
                <template #title>
                  <span>Fashion Accessories</span>
                </template>
                <el-menu-item-group title="SSD">
                  <el-menu-item index="1-1">128 GB</el-menu-item>
                  <el-menu-item index="1-2">256 GB</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="HARD">
                  <el-menu-item index="1-3">500 GB</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>LAPTOP</template>
                  <el-menu-item index="1-4-1">HP</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-sub-menu index="7">
                <template #title>
                  <span>Fashion</span>
                </template>
                <el-menu-item-group title="SSD">
                  <el-menu-item index="1-1">128 GB</el-menu-item>
                  <el-menu-item index="1-2">256 GB</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="HARD">
                  <el-menu-item index="1-3">500 GB</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>LAPTOP</template>
                  <el-menu-item index="1-4-1">HP</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-sub-menu index="8">
                <template #title>
                  <span>Luxury Food</span>
                </template>
                <el-menu-item-group title="SSD">
                  <el-menu-item index="1-1">128 GB</el-menu-item>
                  <el-menu-item index="1-2">256 GB</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="HARD">
                  <el-menu-item index="1-3">500 GB</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>LAPTOP</template>
                  <el-menu-item index="1-4-1">HP</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-sub-menu index="9">
                <template #title>
                  <span>Jewelry</span>
                </template>
                <el-menu-item-group title="SSD">
                  <el-menu-item index="1-1">128 GB</el-menu-item>
                  <el-menu-item index="1-2">256 GB</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="HARD">
                  <el-menu-item index="1-3">500 GB</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>LAPTOP</template>
                  <el-menu-item index="1-4-1">HP</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-sub-menu index="10">
                <template #title>
                  <span>Vehicle</span>
                </template>
                <el-menu-item-group title="SSD">
                  <el-menu-item index="1-1">128 GB</el-menu-item>
                  <el-menu-item index="1-2">256 GB</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="HARD">
                  <el-menu-item index="1-3">500 GB</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>LAPTOP</template>
                  <el-menu-item index="1-4-1">HP</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
            </el-menu>
          </div>
        </div>
        <div class="col-8 col-md-12">
          <div class="row">
            <div class="col-4 col-sm-6" v-for="product, index of products" :key="index">
              <div class="product" @click="submit(product._id)">
                <div class="row">
                  <div class="col-12">
                    <div class="product-box">
                      <router-link :to="`/product/view/`">
                        <img :src="`${url}/${product.photos[0]}`" alt="">
                      </router-link>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="product-title">
                      <div class="name">
                        <a :href="`/product/view/`">{{ product.title }}</a>
                      </div>
                      <div class="price"><a :href="`/product/view/`">{{ product.price.toLocaleString() }}
                          so'm</a></div>
                      <div class="product-bottom">
                        <a :href="`/product/view/`">{{ product.discription }}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-90">
          <ProMini />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProMini from '@/components/home/ProMini.vue';

export default {
  components: { ProMini },
  computed: {
    url() {
      return this.$store.getters.url
    },
    products() {
      return this.$store.getters.products
    }
  },
  methods:{
    submit(id){
      this.$store.dispatch('getProduct',id)
    }
  },
  mounted() {
    this.$store.dispatch('getAllProducts')
  }
}
</script>

<style lang="scss" scoped>
.product {
  filter: drop-shadow(12px 20px 24px rgba(69, 79, 89, 0.08));

  &-block {
    display: flex;
    flex-direction: column;
    padding-bottom: 500px;

    &-title {
      display: flex;
      font-family: 'medium';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #000000;
      margin-bottom: 20px;
      cursor: pointer;

      &:last-child {
        margin-bottom: 500px;
      }

      img {
        margin-left: auto;
        width: 10px;
        height: 10px;
      }
    }
  }
}

.text {
  margin-top: 200px;
  margin-bottom: 30px;
}

.el-menu {
  border-right: unset;
}

.el-sub-menu__title {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  span {
    position: absolute;
    left: 0;
    width: unset;
    font-size: 18px;
  }

  .el-icon {
    margin-left: auto;
    right: 0;
    top: 15px;
  }
}



.text[data-v-5a7c68cb] {
  margin-top: 20px;
  margin-left: 10px;
}
</style>