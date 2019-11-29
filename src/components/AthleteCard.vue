<template>
  <router-link :to="`athletes/${card.card_link.uid}`" class="athlete-card">
    <figure>
      <img
        :src="card.card_image.url"
        :srcset="`${card.card_image.url} 1x, ${card.card_image.url} 2x,`"
        :alt="card.card_image.alt"
      />
      <figcaption>
        <prismic-rich-text :field="card.card_name"/>
      </figcaption>
    </figure>
    <button class="btn btn-primary">Choose</button>
  </router-link>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
  .athlete-card {
    position: relative;
    width: 100%;
    max-width: calc((100% / 4) - 40px);
    margin: 0 20px 50px;
    padding: 10px 10px 100px;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 11px 18px 0px rgba(0, 0, 0, 0.1);
    transition: .25s;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 11px 18px 9px rgba(0, 0, 0, 0.06);

      .btn {
        background-color: darken(#39505c, 5);
      }
    }

    .btn {
      position: absolute;
      bottom: 19px;
      left: 50%;
      transform: translateX(-50%);

      @include media(mobileXS) {
        width: 100%;
        border-radius: 35px;
        font-size: 26px;
      }
    }

    figure {
      height: 220px;

      img {
        height: 100%;
        width: 100%;
        border-radius: 5px;
        object-fit: cover;
        object-position: top;
      }

      @include media(mobileXS) {
        height: 60vw;
      }
    }

    figcaption {
      position: relative;
      top: -53px;
      font-weight: 500;
      font-size: 28px;

      p {
        display: inline-block;
        background-color: #fff;
        padding: 3px 12px 2px 5px;
      }

      strong {
        position: absolute;
        bottom: -42px;
        right: 0;
        font-weight: 700;
        display: inline-block;
        background-color: #fff;
        padding: 2px 5px 6px 12px;
      }

      @include media(mobileXS) {
        font-size: 9vw;
      }
    }

    @include media(tablet) {
      max-width: calc((100% / 3) - 40px);
    }

    @include media(mobile) {
      max-width: calc((100% / 2) - 40px);
    }

    @include media(mobileXS) {
      max-width: 100%;
      margin: 0 0 25px;
      padding-bottom: 120px;
    }
  }
</style>