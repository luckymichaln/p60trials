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

  components: {
    HomeHero,
    HomeCards,
    AppStripes
  }
}
</script>