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
                      <li><router-link to="/product/view/technical">Technical Specifications</router-link></li>
                      <li><router-link to="/product/view/coment" class="active">Comment</router-link></li>
                  </ul>
                  <div class="col-10">
                      <div class="title ml--15 mb-30">Comment</div>
                      <div class="product-description" v-for="(coment,index) of coments" :key="index">
                      <div class="row">
                        <div class="product-avatar"></div>
                        <div class="product-item">
                            <div class="product-item-name">{{coment.name}}</div>
                            <div class="product-item-watch">October 20, 2020</div>
                            <div class="product-item-star">
                                <img src="@/assets/icons/star.svg" alt="">
                                <img src="@/assets/icons/star.svg" alt="">
                                <img src="@/assets/icons/star.svg" alt="">
                                <img src="@/assets/icons/star.svg" alt="">
                                <img src="@/assets/icons/star.svg" alt="">
                            </div>
                        </div>
                        <div class="product-button">Purchased by 247 supplier</div>
                        <div class="product-button">Gold color</div>
                        </div>
                        <div class="product-description-text mb-20">{{coment.text}}</div>
                        <div class="d-flex mb-40">
                            <div class="product-item-watch fz-14">
                                <img src="@/assets/icons/like.png" alt="">Like
                            </div>
                            <div class="product-item-watch fz-14 ml-80">
                                <img src="@/assets/icons/messages.png" alt="">Reply
                            </div>

                        </div>
                    </div> 
                  </div>
                  <div class="d-flex align-items-center  justify-content-center"><button class="btn bg-black">See More</button></div>
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
              coments:[
                {
                    name:'Ralph Edwards',
                    text:'Watch the movie very loud, very sharp. Paper wrap - protect the environment. There is a stamp on fragile goods, but the more it is - the more the courier will throw ...: D'
                },
                {
                    name:'Savannah Nguyen',
                    text:`I bought and used very well compared to the price range. It is advised that you should use Pockie's Fast Delivery service which will be faster and avoid more distortion than standard Delivery. Before, I bought it for my brother ipad 9.7 2018 Standard delivery, the box a lot distorted.`
                },
                {
                    name:'Cody Fisher',
                    text:`Venture to buy a valuable technology product online for the first time! I have to say chonhagiau CSKH is too good, I book on September 3, there is no fast delivery so 9/9 deadline is available, but there is a busy job so thanks to early delivery support, today 9/9 is in stock! Hope using no problem later ..`
                }
              ]
              
          }
      },
      components:{
      ProMini,
      Splide, 
      SplideSlide
  }
  }
  </script>
  
  <style lang="scss">
  @import '@/styles/components/home/product.scss';
  </style>