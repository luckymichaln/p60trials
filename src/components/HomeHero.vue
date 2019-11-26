<template>
  <section class="container container--wide home-hero">
    <div class="home-hero__hero-image">
      <div class="home-image-logo">
        <img
          :src="heroData.heroLogo.url"
          alt="Project Sixty name logo"
        />
      </div>
      <div class="hero-image-wrapper">
        <img
          :src="heroData.heroImage.url"
          :srcset="`${heroData.heroImage.url} 1x, ${heroData.heroImage.url} 2x`"
          alt="Project Sixty team"
        />
      </div>
    </div>
    <div class="home-hero__background-logo">
      <img
        :src="heroData.bgcLogo.url"
        alt="Project Sixty logo"
      />
    </div>
    <p
      class="home-hero-subheading"
      v-rellax="{speed: 2}"
    >
      <span class="no-selection">
        {{ $prismic.richTextAsPlain(heroData.heroSubheading) }}
      </span>
    </p>
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
    position: relative;

    &__hero-image {
      text-align: right;
      height: 83vh;
    }

    &__background-logo {
      position: absolute;
      top: 10px;
      left: -20px;
      width: 27%;
      max-width: 320px;
    }

    &-subheading {
      position: absolute;
      top: 45%;
      left: -66px;
      font-size: 72px;
      font-weight: 700;
      color: #484848;

      span {
        display: block;
        transform: rotate(-90deg);
      }
    }

    .home-image-logo {
      position: absolute;
      top: 40px;
      left: 28%;
      z-index: 10;
      width: 355px;
      padding: 20px 40px 9px 10px;
      background-color: #fff;
    }

    .hero-image-wrapper {
      position: relative;
      left: 380px;
      z-index: 0;
      transform: skew(-25deg, 0deg);
      height: 100%;
      overflow: hidden;

      img {
        position: relative;
        right: 380px;
        z-index: 2;
        transform: skew(25deg, 0deg);
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &::before {
        /* content: ''; */
        position: absolute;
        top: 0;
        left: -275px;
        z-index: 3;
        height: 100%;
        width: 55%;
        background-color: #fff;
        transform: skew(-25deg, 0deg);
      }
    }
  }
</style>