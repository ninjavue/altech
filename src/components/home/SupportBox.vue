<template>
  
  <div class="support mb-80">
    <div v-show="brendId.length > 0" class="support-right">
      <button @click="close">
        <span></span>
      </button>
      <div class="d-flex justify-content-center align-items-center"
      v-for="item of brendId"
      :key="item._id"
      >
      <router-link :to="`product/view`" class="support-right-img" @click="sub(item._id)">
        <img :src="`${url}/${item.photos[0]}`" alt="">
      </router-link>
      <router-link class="ml-20" :to="`product/view`" @click="sub(item._id)">
        <div class="support-right-title"  @click="sub(item._id)">
        {{item.title}}
      </div>
      <div class="support-right-price"  @click="sub(item._id)">
       Price: {{item.price.toLocaleString()}} so'm
      </div>
      </router-link>

      </div>
    </div>
  <div class="container">
        <div class="row">
            <div class="col-20  col-md-3 col-sm-4" v-for="brend of brends" :key="brend._id">
                <div class="support-box" v-show="`${brend.img}`!=='undefined'" @click="submit(brend._id)">
                    <div  @click="toggle = !toggle">
                        <img :src="`${url}/${brend.img}`" alt="" class="brend">
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            toggle: false
        };
    },
    computed: {
        url() {
            return this.$store.getters.url;
        },
        brends() {
            return this.$store.getters.brends;
        },
        brendId() {
            return this.$store.getters.brendId;
        }
    },
    methods: {
        clickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.brendId.length = 0;
                
            }
        },
        submit(id) {
            this.$store.dispatch("getBrendId", id);
        },
        sub(id) {
            this.$store.dispatch("getProduct", id);
        },
        close() {
            this.brendId.length = 0;
        }
    },
    mounted() {
        this.$store.dispatch("getAllBrend");
        document.addEventListener("click", this.clickOutside);
    },
    unmounted() {
        document.removeEventListener("click", this.clickOutside);
    },
}
</script>
<style lang="scss">
@import '@/styles/components/home/support.scss';
.brend{
  filter: drop-shadow(12px 20px 24px rgba(69, 79, 89, 0.08));
}
.support-box{
  padding: 15px;

}
</style>