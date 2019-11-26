<template>
  <div class="athlete-profile">
    <section class="athlete-profile__hero">
      <div class="hero-info">
        <h1 class="hero-info-name">{{ $prismic.richTextAsPlain(data.hero.fullName) }}</h1>
        <div class="hero-info__content">
          <span class="content-age">'{{ $prismic.richTextAsPlain(data.hero.age) }}</span>
          <h2 class="content-heading">Biggest achievements:</h2>
          <prismic-rich-text
            class="content-list"
            :field="data.hero.heroAchievements"
          />
          <ul class="content-list--social">
            <li
              v-for="(link, key) in data.hero.socialMedia"
              :key="key"
            >
              <prismic-link
                :field="link"
              />
            </li>
          </ul>
        </div>
        <router-link
          :to="{name: 'home'}"
          class="btn btn-primary"
        >
          Go back
        </router-link>
      </div>
      <div class="hero-photo">
        <img
          :src="data.hero.heroImage.url"
          :srcset="`${data.hero.heroImage.url} 1x, ${data.hero.heroImage.url} 2x`"
        />
      </div>
    </section>
    <section class="athlete-profile__logos">
      <img
        src="../assets/images/logo-vertical.svg"
        alt="Project Sixty logotype"
      />
    </section>
    <section class="athlete-profile__bio">
      <h3 class="bio-heading heading-accent">Full bio</h3>
      <div class="bio__content">
        <div class="bio-info">
          <ul>
            <li>
              <strong>Date of birth:</strong> {{ $prismic.richTextAsPlain(data.bio.birthday) }}
            </li>
            <li>
              <strong>Hometown:</strong> {{ $prismic.richTextAsPlain(data.bio.hometown) }}
            </li>
            <li v-if="data.bio.coach.length">
              <strong>Coach:</strong>
              <prismic-rich-text
                v-if="data.bio.coach[0].spans"
                :field="data.bio.coach"
              />
              <span
                v-else
              >
                {{ $prismic.richTextAsPlain(data.bio.coach) }}
              </span>
            </li>
            <li>
              <strong>Motto:</strong> <prismic-rich-text :field="data.bio.motto"/>
            </li>
          </ul>
        </div>
        <div class="bio-quote">
          <prismic-rich-text :field="data.bio.quote"/>
        </div>
      </div>
    </section>
    <section class="athlete-profile__media">
      <h3 class="media-heading heading-accent">Media</h3>
      {{ data.media }}
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

<style lang="scss">
  .athlete-profile {
    &__hero {
      display: flex;
    }
  }
</style>