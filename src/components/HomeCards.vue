<template>
  <div class="container">
    <section class="home-cards">
      <AthleteCard
        v-for="(card, key) in cards"
        :key="key"
        :card="card"
      />
    </section>
  </div>
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
  .home-cards {
    position: relative;
    z-index: 10;
    display: flex;
    flex-wrap: wrap;
    margin: 130px -20px 0;

    @include media(tablet) {
      margin-top: 80px;
    }

    @include media(mobile) {
      margin: 80px 0 0;
    }

    @include media(mobile) {
      margin: 60px 0 0;
    }
  }
</style>