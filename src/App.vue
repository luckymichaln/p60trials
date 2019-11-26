<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <footer class="app-footer">2019 all rights reserved</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
