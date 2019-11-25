<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="isContentLoaded">
        {{  }}
      </div>
      <div class="loader" v-if="!isContentLoaded"/>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'athlete-profile',

  computed: {
    ...mapState(['isContentLoaded']),
    ...mapGetters(['athleteData'])
  },

  created () {
    this.$store.dispatch('GET_ATHLETE_DATA', { uid: this.$route.params.uid })
  },

  mounted() {
    setTimeout(() => {
      console.log(this.athleteData)
    }, 1000)
  },

  methods: {
    sliderResolver (data) {
      return data.map(el => {
        return el.slider_image.url ? el.slider_image : el.slider_link
      })
    },

    getContent (uid) {
      return this.$prismic.client.getByUID('athlete_page', uid).then((document) => {
        if (document) {
          const { achievements, birthday, age, coach, full_name, hero_achievements, hero_image, hero_social_media, hometown, motto, quote, slider } = document.data

          this.hero.image = hero_image
          this.hero.name = full_name
          this.hero.age = age
          this.hero.achievements = hero_achievements
          this.hero.socialMedia = hero_social_media

          this.bio.birthday = birthday
          this.bio.coach = coach
          this.bio.hometown = hometown
          this.bio.motto = motto
          this.bio.quote = quote

          this.media.slider = this.sliderResolver(slider)
        } else {
          this.$router.push('/not-found')
        }
      });
    }
  }
}
</script>

<style>

</style>