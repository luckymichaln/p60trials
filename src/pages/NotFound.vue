<template>
  <div class="container not-found-page">
    <p>Page Not Found :(</p>
    <router-link
      class="btn btn-primary"
      :to="{ name: 'home' }"
    >
      Go to home page
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss">
  .not-found-page {
    text-align: center;
    min-height: calc(100vh - 63px);

    p {
      margin-bottom: 100px;
    }
  }
</style>