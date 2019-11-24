<template>
  <div>
    <Hero
      :image="image"
      :titleLogo="logo"
      :backgroundLogo="backgroundLogo"
      :subheading="subheading"
      :athletesList="athletesList"
    />
  </div>
</template>

<script>
import Hero from '@/components/Hero';

export default {
  name: 'home',

  data () {
    return {
      image: null,
      logo: null,
      subheading: null,
      backgroundLogo: null,
      athletesList: null
    }
  },

  created() {
    this.getContent()
  },

  methods: {
    async getContent() {
      await this.$prismic.client.getSingle('home_page').then((document) => {
        if (document.data) {
          const { background_logo, hero_logo, hero_subheading, home_hero_image, athletes_cards } = document.data
          this.image = home_hero_image
          this.logo = hero_logo
          this.subheading = hero_subheading[0].text
          this.backgroundLogo = background_logo
          this.athletesList = athletes_cards
        }
      });
    }
  },

  components: {
    Hero
  }
}
</script>

<style>

</style>