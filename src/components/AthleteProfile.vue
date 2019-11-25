<template>
  <div class="athlete-profile">
    <section>
      <h1>{{ $prismic.richTextAsPlain(data.hero.fullName) }}</h1>
      <div>
        <img
          :src="data.hero.heroImage.url"
          :srcset="`${data.hero.heroImage.url} 1x, ${data.hero.heroImage.url} 2x`"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>