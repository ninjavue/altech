<template>
  <div class="container">
    <div class="product">
        <div class="row">
            <div class="col-6">
                <div class="product-box-img">
                    <Splide :options="{
                        type:'loop',
                        perPage: 1,
                        autoplay:true
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
            <div class="col-9 mb-80">
                <ul class="product-menu">
                    <li><router-link to="/product/view" class="active">Description</router-link></li>
                    <li><router-link to="/product/view/technical">Technical Specifications</router-link>
                    </li>
                    <li><router-link to    ="/product/view/coment">Comment</router-link></li>
                </ul>
                <div class="product-description" v-for="(description,index) of descriptions" :key="index">
                    <div class="product-description-title mb-20">{{description.title}}</div>
                    <div class="product-description-text mb-20">{{description.text}}</div>
                    <div class="product-description-text mb-20">{{description.text1}}</div>

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
            descriptions:[
                {title:'Thin and light design, thin 5.9mm, soft rounded edges, elegant silver color',text:'Apple iPad Pro 11 "(2020) Wifi 128Gb (Silver) has the same design as its predecessor, but there are changes such as the rear camera system is placed in a square and weight 471g for a feeling of weight. Size 247.6 x 178.5 mm and a thickness of only 5.9mm, iPad Pro 11 2020 will be extremely thin and light, convenient to carry and use on the go.',text1:'Soft rounded edges provide a comfortable, solid hand feel, creating harmony in design. iPad Pro 11 2020 comes in elegant and classy silver.'},
                {
                    title:'120Hz screen, 16 million colors, 11-inch IPS LCD panel',text:'Using a screen with a frequency of 120Hz will give iPad Pro the ability to display sharp images, fast image processing speed. In addition, the 120Hz frequency screen for Apple also symbolizes touch sensitivity, helping to scan finger movements and respond quickly. As a result, users will have a better experience, fast and responsive operations, avoiding image glitches and delay.',text1:'Apple also equips the iPad Pro 11 2020 with an IPS LCD panel of 16 million colors, with a resolution of 1668x2388 pixels on an 11-inch screen size to help display sharp, vivid colors, high contrast. In addition, the screen technologies like ProMotion, True Tone give users authentic and wonderful experiences. In addition, the iPad Pro 11 2020 s screen is also covered with an oleophobic coating that helps prevent fingerprints and glare effectively when used outdoors.'
                },
                {
                    title:'Perfect Experience',
                    text:`Everything you experience on iPad (2019) 10.2 "Wifi + Cellular 32GB MW6D2ZA / A (Gold) has great picture and sound, thanks to the 10.2 inch Retina display and stereo system. Apple TV, you'll have access to popular streaming services and enjoy blockbuster TV shows and movies.`
                },
                {
                    title:'Impressive performance when owning the A12Z Bionic chip',
                    text:`In addition to the design and screen, Apple also equips the iPad Pro 11 2020 with strong and outstanding performance when owning an 8-core A12Z Bionic chip with an architecture that brings high efficiency in heat dissipation. In addition, the new controller system is improved, optimized to bring higher performance to the iPad Pro 11 2020. Thanks to these improvements, the iPad Pro 11 2020 will be able to edit 4K video, design smooth 3D image, meeting all usage needs.`,
                    text1:`The 128GB internal memory allows you to comfortably use the memory to store pictures, videos, songs, applications, ... In addition to the 128GB standard memory version, iPad Pro 11 2020 version with higher memory capacity That's the 256GB iPad Pro 11 2020.`
                },
                {
                    title:'Improved rear camera system with LiDAR depth gauge',
                    text:`Unlike previous iPad Pro brothers, in the iPad Pro 11 2020, the camera system has been greatly improved with the 2 rear camera system with a LiDAR depth gauge so you can capture every moment professionally. With a 12MP main camera and 10MP ultra wide-angle camera, the LiDAR scanner senses depth with a measuring distance of up to 5m around the subject, outdoors and indoors. Thanks to the new camera system, you can record every image, edit and edit videos in stunning 4K resolution.`,
                    text1:`In addition, the iPad Pro 11 2020 is also equipped with a 7MP selfie camera that supports 1080p video so you can video call high quality, take beautiful selfies or even use the iPad as a camera to record vlogs. quality to share with friends.`
                },
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