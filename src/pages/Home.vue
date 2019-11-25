<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <div v-if="isContentLoaded">
        <HomeHero
          :heroData="homeHeroData"
        />
        <p @click="scrollTo()">Meet the team</p>
        <HomeCards
          :cards="homeCards"
        />
      </div>
      <div class="loader" v-if="!isContentLoaded"/>
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
        top: 1000,
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

<style>

</style>