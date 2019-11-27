<template>
  <ul class="content-list--social">
    <li
      v-for="(el, key) in list"
      :key="key"
    >
      <a
        :href="el.url"
        target="_blank"
      >
        <font-awesome-icon :icon="iconName(el.type)" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    iconName(key) {
      switch (key) {
        case 'instagram':
          return ['fab', 'instagram'];

        case 'facebook':
          return  ['fab', 'facebook-f'];

        case 'youtube':
          return ['fab', 'youtube'];

        case 'vimeo':
          return ['fab', 'vimeo-v'];

        default:
          return ['fas', 'globe-africa'];
      }
    }
  }
}
</script>

<style lang="scss">
  .content-list--social {
    position: absolute;
    left: 20px;
    bottom: 12px;
    display: flex;

    li:not(:last-child) {
      margin-right: 24px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 24px;
      width: 24px;
      border-radius: 3px;
      color: #fff;
      background-color: #000;
    }
  }
</style>