<template>
  <div class="athlete-profile">
    <section class="athlete-profile__hero">
      <div class="hero-info">
        <prismic-rich-text
          class="hero-info-name"
          :field="data.hero.athleteName"
        />
        <div class="hero-info__content">
          <span class="content-year">'{{ $prismic.richTextAsPlain(data.hero.year) }}</span>
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
      justify-content: space-between;
    }

    .hero-photo {
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &::before,
      &::after {
        content: '';
        position: absolute;
        z-index: -1;
        height: 200px;
        width: 340px;
        background-color: #000;
      }

      &::before {
        top: -10px;
        left: -10px;
      }

      &::after {
        right: -10px;
        bottom: -10px;
      }
    }

    .hero-info {
      position: relative;
      width: 100%;
      max-width: 380px;
      z-index: 10;

      &-name {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 84px;
        font-weight: 700;

        p {
          display: inline-block;
          background-color: #fff;

          &:first-child {
            padding: 10px 40px 10px 10px;
          }

          &:last-child {
            padding: 10px 50px 10px 30px;
            margin-left: 80px;
          }
        }
      }

      &__content {
        position: relative;
        top: -50px;
        z-index: -1;
        margin-top: 210px;
        padding: 90px 10px 80px 18px;
        font-size: 15px;
        background-color: #eeeeee;

        .content {
          &-year {
            position: absolute;
            top: 50px;
            right: 10px;
            margin-left: auto;
            font-size: 85px;
            font-weight: 700;
            color: #d5d5d5;
          }

          &-heading {
            font-size: 18px;
            font-weight: 500;
          }

          &-list {
            margin: 15px 0 0 30px;
            font-weight: 300;
            line-height: 1.3;

            li::before {
              content: '-';
              position: relative;
              left: -10px;
            }
          }
        }
      }
    }
  }
</style>