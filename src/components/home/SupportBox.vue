<template>
  
  <div class="container">
    <div class="support mb-80">
        <div class="row">
            <div class="col-20" v-for="brend of brends" :key="brend._id">
                <div class="support-box" v-show="`${brend.img}`!=='undefined'">
                    
                    <router-link :to="`/brand/${brend._id}`">
                        <img :src="`${url}/${brend.img}`" alt="" class="brend">
                    </router-link>
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
    brends(){
      return this.$store.getters.brends
    }
  },
  mounted(){
      this.$store.dispatch('getAllBrend')
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