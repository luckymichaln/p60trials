<template>
  <div class="home-page">
    <transition name="fade" mode="out-in">
      <div v-if="isContentLoaded">
        <HomeHero
          :heroData="homeHeroData"
        />
        <button
          class="home-page-scroll-btn"
          @click="scrollTo()"
        >
          Meet the team
        </button>
        <span class="home-page-accent-span">Trials</span>
        <HomeCards
          :cards="homeCards"
        />
      </div>
      <div
        v-else
        class="loader"
      >
        loading...
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import HomeHero from '@/components/HomeHero';
import HomeCards from '@/components/HomeCards';

export default {
  name: 'home',

  computed: {
    ...mapState(['isContentLoaded']),
    ...mapGetters(['homeHeroData', 'homeCards'])
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

  created () {
    if (!this.homeHeroData) {
      this.$store.dispatch('GET_HP_DATA')
    }
  },

  components: {
    HomeHero,
    HomeCards
  }
}
</script>

<style lang="scss">
  .home-page {
    &-accent-span {
      position: absolute;
      bottom: -140px;
      left: 50%;
      z-index: -1;
      transform: translateX(-50%);
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