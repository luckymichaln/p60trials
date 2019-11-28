<template>
  <swiper :options="options">
    <swiper-slide
      v-for="(slide, key) in slides"
      :key="key"
    >
      <img
        v-if="slide.type === 'photo'"
        :src="slide.media.url"
        :srcset="`${slide.media.url} 1x, ${slide.media.url} 2x`"
      />
      <div v-if="slide.type === 'youtube'">
        <vue-plyr>
          <div class="plyr__video-embed">
            <iframe
              :src="slide.media.url"
              allowfullscreen allowtransparency allow="autoplay">
            </iframe>
          </div>
        </vue-plyr>
      </div>
      <div v-if="slide.type === 'vimeo'">
        <vue-plyr>
          <div :data-plyr-provider="slide.type" :data-plyr-embed-id="slide.media.url"></div>
        </vue-plyr>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  export default {
    props: {
      options: {
        type: Object,
        default: () => {}
      },
      slides: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss">
  .swiper-container {
    padding-bottom: 60px !important;

    .swiper-slide {
      cursor: pointer;

      img {
        height: 100%;
        width: 100%;
        max-height: 80vh;
        object-fit: contain;
      }
    }

    .swiper-pagination-bullet {
      height: 10px;
      width: 10px;
      border: 1px solid #737373;
      opacity: 1;
      background-color: transparent;

      &-active {
        border-color: #39505c;
        background-color: #39505c;
      }

      &s {
        bottom: 15px !important;
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      top: unset !important;
      bottom: 5px !important;
      background-image: none;

      &::before,
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        background-color: #000;
        height: 20px;
        width: 2px;
      }
    }

    .swiper-button-prev {
      &::before {
        top: 11px;
        left: 0;
        bottom: unset;
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }

    .swiper-button-next {
      &::after {
        top: 11px;
        bottom: unset;
        right: 0;
        transform: rotate(-45deg);
      }

      &::before {
        right: 0;
        transform: rotate(45deg);
      }
    }
  }
</style>