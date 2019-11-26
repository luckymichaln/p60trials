<template>
  <div class="home-page">
    <transition name="fade" mode="out-in">
      <HomeContent
        v-if="isContentLoaded"
        :hero="homeHeroData"
        :cards="homeCards"
      />
      <div
        v-if="!isContentLoaded"
        class="loader"
      >
        loading...
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import HomeContent from '@/components/HomeContent';

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
    HomeContent
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