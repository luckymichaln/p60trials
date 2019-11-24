<template>
  <div>
    Athlete profile
  </div>
</template>

<script>
export default {
  name: 'athlete-profile',
  data () {
    return {
      hero: {
        image: null,
        name: null,
        age: null,
        achievements: null,
        socialMedia: null
      },
      bio: {
        birthday: null,
        coach: null,
        hometown: null,
        motto: null,
        quote: null
      },
      media: {
        slider: null
      }
    }
  },

  async created () {
    await this.getContent(this.$route.params.uid)
  },

  methods: {
    sliderResolver (data) {
      return data.map(el => {
        return el.slider_image.url ? el.slider_image : el.slider_link
      })
    },

    getContent (uid) {
      return this.$prismic.client.getByUID('athlete_page', uid).then((document) => {
        if (document.data) {
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