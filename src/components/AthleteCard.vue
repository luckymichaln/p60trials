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
    }

    .btn {
      position: absolute;
      bottom: 19px;
      left: 50%;
      transform: translateX(-50%);
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
    }

    figcaption {
      position: relative;
      top: -53px;
      font-weight: 500;
      font-size: 28px;

      p {
        display: inline-block;
        background-color: #fff;
        padding: 2px 12px 6px 5px;
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
    }
  }
</style>