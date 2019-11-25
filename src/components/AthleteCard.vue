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

<style>

</style>