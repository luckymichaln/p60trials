<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <AthleteProfile
        v-if="isContentLoaded"
        :data="athleteData"
      />
      <div class="loader" v-if="!isContentLoaded">loading...</div>
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

  beforeRouteUpdate (to, from, next) {
    this.$store.dispatch('GET_ATHLETE_DATA', { uid: to.params.uid });
    next();
    setTimeout(() => {
      window.scrollTo(0,0)
    }, 450)
  },

  components: {
    AthleteProfile
  }
}
</script>

<style>

</style>