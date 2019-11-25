<template>
  <div>
    <HomeHero
      v-if="isContentLoaded"
      :heroData="homeHeroData"
    />
    <div class="loader" v-if="!isContentLoaded"/>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import HomeHero from '@/components/HomeHero';

export default {
  name: 'home',

  computed: {
    ...mapGetters(['homeHeroData']),
    ...mapState(['isContentLoaded'])
  },

  created () {
    if (!this.data) {
      this.$store.dispatch('GET_HP_DATA')
    }
  },

  methods: {
    async getContent() {
      await this.$prismic.client.getSingle('home_page').then((document) => {
        if (document.data) {
          const { background_logo, hero_logo, hero_subheading, home_hero_image, athletes_cards } = document.data
          // console.log(document.data)
          this.image = home_hero_image
          this.logo = hero_logo
          this.subheading = hero_subheading[0].text
          this.backgroundLogo = background_logo
          this.athletesList = athletes_cards
          // console.log(this.logo, this.image)
        }
      });
    }
  },

  components: {
    HomeHero
  }
}
</script>

<style>

</style>