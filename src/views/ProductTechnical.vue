<template>
    <div class="container">
      <div class="product">
          <div class="row">
              <div class="col-6">
                  <div class="product-box-img">
                    <Splide :options="{
                        type:'loop',
                        rewind: true, 
                        drag   : 'free',
                        focus  : 'center',
                        perPage: 1,
                        autoScroll: {
                            speed: 1,
                        },
  }">
                    <SplideSlide>
                    <img src="@/assets/img/laptop.svg" alt="">
                    </SplideSlide>
                    <SplideSlide>
                    <img src="@/assets/img/laptop1.svg" alt="">
                    </SplideSlide>
                    <SplideSlide>
                    <img src="@/assets/img/laptop2.svg" alt="">
                    </SplideSlide>
                    <SplideSlide>
                    <img src="@/assets/img/laptop3.svg" alt="">
                    </SplideSlide>
                </Splide>
                  </div>
              </div>
              <div class="col-6">
                  <div class="product-box-charac">
                      <div class="product-box-charac-title">
                          Apple iPad Pro 11" (2020) Wifi 128Gb (Silver)- 128Gb/ 11Inch/ Wifi
                      </div>
                      <div class="row ml-3">
                          <img src="@/assets/icons/star.svg" alt="">
                          <img src="@/assets/icons/star.svg" alt="">
                          <img src="@/assets/icons/star.svg" alt="">
                          <img src="@/assets/icons/star.svg" alt="">
                          <img src="@/assets/icons/star.svg" alt="">
                      </div>
                      <div class="product-box-charac-price">
                          $904.18
                      </div>
                      <div class="product-box-charac-text" v-for="(product,index) of products" :key="index">
                         {{product.text}}
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
                          <button class="cnt" v-show="count>0" @click="count--">-</button>
                          <button class="count">{{count}}</button>
                          <button class="cnt" @click="count++">+</button>
                          <button class="btn big">Add to Cart</button>
                      </div>
                     <div class="d-flex">
                      <div class="product-box-charac-text mt-20">
                          Share: 
                      </div>
                      <div class="mt-20 ml-a mr-100">
                          <img src="@/assets/img/facebook.svg" alt="">
                      <img src="@/assets/img/linkedin.svg" alt="">
                      <img src="@/assets/img/twitter.svg" alt="">
                      <img src="@/assets/img/mail.svg" alt=""></div>
                     </div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-9 mb-40">
                  <ul class="product-menu">
                      <li><router-link to="/product/view">Description</router-link></li>
                      <li><router-link to="/product/view/technical" class="active">Technical Specifications</router-link></li>
                      <li><router-link to="/product/view/coment">Comment</router-link></li>
                  </ul>
                  <div class="col-10">
                      <div class="product-description" v-for="(technical,index) of technicals" :key="index">
                      <div class="row">
                            <div class="col-5">
                                <div class="product-description-title">{{technical.title}}</div>
                            </div>
                            <div class="col-7">
                                <div class="product-description-text">{{technical.text}}</div>
                            </div>
                        </div>
                    </div> 
                  </div>
              </div>
              <div class="col-12 mb-80">
                  <div class="title">Recently Viewed</div>
                  <div class="row">
                    <ProMini/>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
    import ProMini from '@/components/home/ProMini.vue';
    import { Splide, SplideSlide} from '@splidejs/vue-splide';
    // import router from '@/router';
  
  export default {
      data() {
          return {
              count:1,
              products:[
              {text:'Code: Apple iPad Pro 11" (2020) Wifi 128Gb Silver'},
                  {text:'Category:Technology'},
                  {text:'Keyword:Apple, Technology, Tablet'},
                  {text:'• Destop: LED-Backlit, 11Inch'},
                  {text:'• Chipset/ CPU: Apple A12Z Bionic 2.3Ghz'},
                  {text:'• RAM: 128Gb'},
                  {text:'• Operating System: iOS 13'}
              ],
              technicals:[
                {
                    title:`Information`,text:''
                },
                {
                    title:`Product`,text:'Ipad'
                },
                {
                    title:`Manufacturer`,text:'Apple'
                },
                {
                    title:`Model`,text:'iPad Pro 11" (2020) Wifi 128Gb'
                },
                {
                    title:`Screen`,text:'LED-Backlit, 11Inch'
                },
                {
                    title:`Resolution`,text:'2388x1668'
                },
                {
                    title:`Chipset/ CPU`,text:'	Apple A12Z Bionic 2.3Ghz'
                },
                {
                    title:`RAM`,text:'6Gb'
                },
                {
                    title:`ROM`,text:'128Gb'
                },
                {
                    title:`Memory card support`,text:'No'
                },
                {
                    title:`Camera`,text:'Rear camera: 12MP / Front camera: 7MP'
                },
                {
                    title:`Connect`,text:'	Wifi + Bluetooth 5.0'
                },
                {
                    title:`Fingerprint security`,text:'N'
                },
                {
                    title:`Operating system`,text:'iOS 13'
                },
                {
                    title:`Battery capacity`,text:'0 mAh'
                },
                {
                    title:`Weight`,text:'0.471 kg'
                },
                {
                    title:`Size`,text:'24.7 x 17.8 x 0.59 cm'
                },
                {
                    title:`Color`,text:'Silver'
                },
                {
                    title:`Communication port`,text:'USB Type C'
                },
                {
                    title:`Accessories included`,text:'Charger (18W), Type C cable (1m), instruction manual'
                },
                {
                    title:`Other`,text:'Face ID'
                },
              ]
              
          }
      },
      components:{
        ProMini,
        Splide,
        SplideSlide,
        // router
    }
  }
  </script>
  
  <style lang="scss">
  @import '@/styles/components/home/product.scss';
  </style>