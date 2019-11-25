<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <div v-if="isContentLoaded">
        <AthleteProfile :data="athleteData"/>
      </div>
      <div class="loader" v-if="!isContentLoaded"/>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import AthleteProfile from '../components/AthleteProfile'

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

  components: {
    AthleteProfile
  }
}
</script>

<style>

</style>