<template>
  <div class="app-stripes container">
    <span />
    <span />
    <span />
    <span />
  </div>
</template>

<style lang="scss">
  .app-stripes {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -10;
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;

    span {
      display: block;
      width: 1px;
      height: 100%;
      background-color: #bbb;
    }
  }
</style>