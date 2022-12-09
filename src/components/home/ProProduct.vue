<template>
  <div class="pro">
    <div class="container">
      <div class="text mt-60 mb-30">Promo Product</div>
      <div class="row">
        <div class="rows">
          <div class="col-6 col-sl-12">
            <div class="pro-img">
              <img src="@/assets/img/laptop1.svg" alt="">
            </div>
          </div>
          <div class="col-6 col-sl-12">
            <div class="pro-box">
              <div class="pro-box-title">
                Apple Macbook Air MWTJ2SA/A Space Grey (2020)
              </div>
              <div class="pro-box-price">
                $1,099 <span>$1193.71</span>
              </div>
              <div class="d-flex">
                <div class="pro-box-text">
                  Sold:700
                </div>
                <div class="pro-box-text d-flex align-items-end ml">
                  In Stock:300
                </div>
              </div>
              <div class="d-flex ml-sl-80">
                <div>
                  <div class="boxs">123</div>
                  <div class="boxs-text">
                    Day
                  </div>
                </div><span class="dots">:</span>
                <div>
                  <div class="boxs">42</div>
                  <div class="boxs-text">
                    Hour
                  </div>
                </div>
                <span class="dots">:</span>
                <div>
                  <div class="boxs">00</div>
                  <div class="boxs-text">
                    Min
                  </div>
                </div><span class="dots">:</span>
                <div>
                  <div class="boxs">08</div>
                  <div class="boxs-text">
                    Sec
                  </div>
                </div>
              </div>
              <button class="btn">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div class="rows">
          <div class="col-6 col-sl-12">
            <div class="pro-img">
              <img src="@/assets/img/laptop.svg" alt="">
            </div>
          </div>
          <div class="col-6 col-sl-12">
            <div class="pro-box">
              <div class="pro-box-title">
                Apple Macbook Air MWTJ2SA/A Space Grey (2020)
              </div>
              <div class="pro-box-price">
                $1,099 <span>$1193.71</span>
              </div>
              <div class="d-flex">
                <div class="pro-box-text">
                  Sold:700
                </div>
                <div class="pro-box-text d-flex align-items-end ml">
                  In Stock:300
                </div>
              </div>
              <div class="d-flex ml-sl-80">
                <div>
                  <div class="boxs">123</div>
                  <div class="boxs-text">
                    Day
                  </div>
                </div><span class="dots">:</span>
                <div>
                  <div class="boxs">42</div>
                  <div class="boxs-text">
                    Hour
                  </div>
                </div>
                <span class="dots">:</span>
                <div>
                  <div class="boxs">00</div>
                  <div class="boxs-text">
                    Min
                  </div>
                </div><span class="dots">:</span>
                <div>
                  <div class="boxs">08</div>
                  <div class="boxs-text">
                    Sec
                  </div>
                </div>
              </div>
              <button class="btn">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="img-box">
      <div class="container">
        <div class="img-boxs">
          <div class="img-box-text">
            New Product
          </div>
          <div class="img-box-title">
            FASHIONABLE WALLETS <br>
            BIG GOOD SALE FOR HER
          </div>
          <button class="btn">Order Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    url() {
      return this.$store.getters.url
    },
    randomproduct() {
      return this.$store.getters.randomproduct
    }
  },
  mounted() {
    this.$store.dispatch('getAllRandom')
  },
}
</script>

<style lang="scss">
@import '@/styles/components/home/pro.scss';
</style>