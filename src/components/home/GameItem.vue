<template>
  <div class="game">
    <div class="row">
      <div class="game-box">
        <Splide :options="{
          type: 'loop',
          perPage: 1,
          autoplay: true
        
        }">
          <SplideSlide>
            <img src="@/assets/img/aorus.jpg" alt="Sample 1">
          </SplideSlide>
          <SplideSlide>
            <img src="@/assets/img/aorus1.jpg" alt="Sample 2">
          </SplideSlide>
          <SplideSlide>
            <img src="@/assets/img/aorus2.jpg" alt="Sample 3">
          </SplideSlide>
          <SplideSlide>
            <img src="@/assets/img/aorus3.jpg" alt="Sample 4">
          </SplideSlide>
        </Splide>

      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
  components: {
    Splide,
    SplideSlide,
  }
}
</script>

<style lang="scss">
@import '../../styles/components/home/game.scss';

.game {
  height: 600px;
  overflow: hidden;

  .splide__slide img {
    width: 100%;
    min-height: 600px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    object-fit: cover;
  }

  .splide__pagination {
    display: none;
  }

  .splide__arrow {
    top: 300px;
    width: 60px;
    height: 60px;
    background-color: rgb(42, 41, 41);

    svg {
      fill: aliceblue;
      width: 30px;
      height: 40px;
    }

    &--next {
      right: 30px;
    }

    &--prev {
      left: 50px;
    }
  }
}

@media (max-width:770px) {

}
</style>