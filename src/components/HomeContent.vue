<template>
  <div>
    <HomeHero
      :heroData="hero"
    />
    <button
      class="home-page-scroll-btn no-selection"
      @click="scrollTo()"
    >
      Meet the team
    </button>
    <span
      class="home-page-accent-span no-selection"
      v-rellax="{speed: -1}"
    >
      Trials
    </span>
    <HomeCards
      :cards="cards"
    />
    <AppStripes />
  </div>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeCards from '@/components/HomeCards';
import AppStripes from '@/components/AppStripes';

export default {
  props: {
    hero: Object,
    cards: Array
  },

  methods: {
    scrollTo () {
      window.scrollTo({
        top: 740,
        left: 0,
        behavior: 'smooth'
      })
    }
  },

  components: {
    HomeHero,
    HomeCards,
    AppStripes
  }
}
</script>

<style lang="scss">
.home-page {
    &-accent-span {
      position: absolute;
      bottom: -90px;
      left: 0;
      width: 100vw;
      text-align: center;
      z-index: -1;
      text-transform: uppercase;
      font-size: 300px;
      font-weight: 900;
      color: #f2f2f2;
    }

    &-scroll-btn {
      position: relative;
      display: block;
      margin: 10px auto 0;
      font-size: 24px;
      font-weight: 700;
      text-transform: lowercase;
      text-align: center;
      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: currentColor;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%) rotate(-45deg);
        width: 22px;
        height: 22px;
        border-left: 1px solid #000;
        border-bottom: 1px solid #000;
      }
    }
  }
</style>