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
          <AthleteHeroSocialMedia
            v-if="data.hero.socialMedia.length"
            :list="data.hero.socialMedia"
          />
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
            <li class="list">
              <strong>Achievements:</strong>
              <prismic-rich-text :field="data.bio.achievements"/>
            </li>
            <li v-if="data.bio.motto.length">
              <strong>Motto:</strong> <prismic-rich-text :field="data.bio.motto"/>
            </li>
          </ul>
        </div>
        <div class="bio-quote">
          <prismic-rich-text :field="data.bio.quote"/>
        </div>
      </div>
    </section>
    <section
      v-if="data.media.length"
      class="athlete-profile__media"
    >
      <h3 class="media-heading heading-accent">Media</h3>
      <Swiper
        :options="swiperOptions"
        :slides="data.media"
      />
    </section>
  </div>
</template>

<script>
  import AthleteHeroSocialMedia from './AthleteHeroSocialMedia';
  import Swiper from './vendors/Swiper';

  export default {
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    },

    data() {
      return {
        swiperOptions: {
          autoHeight: true,
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          fadeEffect: {
            crossFade: true
          }
        }
      }
    },

    components: {
      AthleteHeroSocialMedia,
      Swiper
    }
  }
</script>

<style lang="scss">
  .athlete-profile {
    &__hero {
      display: flex;
      justify-content: space-between;
      margin-bottom: 70px;
    }

    &__logos {
      padding: 50px 0;
      border-top: 1px solid #cbcbcb;
      border-bottom: 1px solid #cbcbcb;
      display: flex;
      justify-content: center;

      img {
        width: 100%;
        max-width: 200px;
        opacity: .9;
      }
    }

    &__bio {
      padding-top: 50px;
      margin-bottom: 80px;
    }

    &__media {
      margin-bottom: 200px;

      .media-heading {
        margin-bottom: 50px;
      }
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

      .btn {
        position: relative;
        padding-left: 60px;

        &::before {
          content: '';
          position: absolute;
          top: 11px;
          left: 28px;
          border-top: 5px solid transparent;
          border-right: 5px solid #fff;
          border-bottom: 5px solid transparent;
        }

        &::after {
          content: '';
          position: absolute;
          top: 15px;
          left: 33px;
          height: 2px;
          width: 10px;
          background-color: #fff;
        }
      }

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
            font-size: 19px;
            font-weight: 500;
          }

          &-list {
            margin: 25px 0 0 30px;
            font-weight: 300;
            line-height: 1.6;

            li::before {
              content: '-';
              position: relative;
              left: -10px;
            }
          }
        }
      }
    }

    .bio-info {
      width: 100%;
      max-width: 420px;

      strong {
        margin-right: 5px;
        font-size: 18px;
      }
    }

    .bio__content {
      display: flex;
      margin-top: 50px;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.5;

      a {
        text-decoration: underline;
        font-weight: 700;
        color: #39505c;
      }

      li:not(.list) {
        display: flex;
        align-items: flex-end;
      }

      li {
        margin-bottom: 5px;
      }

      .list ul {
        margin: 5px 0 0 20px;

        li::before {
          content: '-';
          margin-right: 5px;
        }
      }

      .bio-quote {
        position: relative;
        align-self: flex-start;
        width: 100%;
        max-width: 520px;
        margin: 0 50px 0 auto;

        &::before,
        &::after {
          position: absolute;
          font-family: 'Arial';
          font-size: 160px;
          line-height: .8;
          opacity: .2;
        }

        &::before {
          content: '"';
          top: -30px;
          right: -46px;
          transform: rotate(15deg);
        }

        &::after {
          content: '"';
          left: -75px;
          bottom: -30px;
          transform: rotate(-165deg);
        }
      }
    }
  }
</style>