<template>
  <div>
    <!-- {{ heroData.hero_subheading[0].text }} -->
  </div>
</template>

<script>
  export default {
    props: {
      heroData: {
        type: Object,
        default: () => {}
      }
    },

    mounted () {
      // console.log(this.heroData.hero_subheading[0].text)
    }
  }
</script>

<style>

</style>