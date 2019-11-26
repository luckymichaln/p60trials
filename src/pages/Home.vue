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
