<template>
  <section class="home-hero">
    <div class="home-hero__hero-image">
      <div class="home-image-logo">
        <img
          :src="heroData.heroLogo.url"
          :srcset="`${heroData.heroLogo.url} 1x, ${heroData.heroLogo.url} 2x`"
          alt="Project Sixty name logo"
        />
      </div>
      <img
        :src="heroData.heroImage.url"
        :srcset="`${heroData.heroImage.url} 1x, ${heroData.heroImage.url} 2x`"
        alt="Project Sixty team"
      />
    </div>
    <div class="home-hero__background-logo">
      <img
        :src="heroData.bgcLogo.url"
        :srcset="`${heroData.bgcLogo.url} 1x, ${heroData.bgcLogo.url} 2x`"
        alt="Project Sixty logo"
      />
    </div>
    <p class="home-hero-subheading">{{ $prismic.richTextAsPlain(heroData.heroSubheading) }}</p>
  </section>
</template>

<script>
  export default {
    props: {
      heroData: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss">
  .home-hero {

  }
</style>