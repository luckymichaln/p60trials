<template>
  <section class="home-cards">
    <AthleteCard
      v-for="(card, key) in cards"
      :key="key"
      :card="card"
    />
  </section>
</template>

<script>
import AthleteCard from './AthleteCard'

export default {
  props: {
    cards: {
      type: Array,
      default: () => []
    }
  },

  components: {
    AthleteCard
  }
}
</script>

<style lang="scss">

</style>