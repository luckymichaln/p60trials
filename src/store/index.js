import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import Prismic from 'prismic-javascript'
import { endpoint } from './config'

Vue.use(Vuex)

const state = {
  homePageData: null,
  singleAthlete: null,
  isContentLoaded: false
}

const actions = {
  async GET_HP_DATA({ state, commit }) {
    commit('SET_CONTENT_LOADED', { loaded: false })
    try {
      const api = await Prismic.getApi(endpoint)
      const { data } = await api.getSingle('home_page')

      if (data) {
        commit('SET_HP_DATA', { data })
      }

      console.log({ GET_HP_DATA: data })

      commit('SET_CONTENT_LOADED', { loaded: true })
      return data
    } catch (err) {
      console.error(err)
    }
  },

  async GET_ATHLETE_DATA({ state, commit }, { uid }) {
    commit('SET_CONTENT_LOADED', { loaded: false })
    try {
      const api = await Prismic.getApi(endpoint)
      const { data } = await api.getByUID('athlete_page', uid)

      if (data) {
        commit('SET_ATHLETE_DATA', { data })
      }

      console.log({ GET_ATHLETE_DATA: data })

      commit('SET_CONTENT_LOADED', { loaded: true })
      return data
    } catch (err) {
      router.push('/not-found')
      console.error(err)
    }
  }
}

const mutations = {
  SET_HP_DATA(state, { data }) {
    state.homePageData = data
  },

  SET_ATHLETE_DATA(state, { data }) {
    state.singleAthlete = data
  },

  SET_CONTENT_LOADED(state, { loaded }) {
    state.isContentLoaded = loaded
  }
}

const getters = {
  homeHeroData: state => {
    if (!state.homePageData) {
      return null
    }

    const { background_logo: bgcLogo, hero_logo: heroLogo, hero_mobile_logo: heroMobileLogo, hero_subheading: heroSubheading, home_hero_image: heroImage } = state.homePageData

    return {
      bgcLogo,
      heroLogo,
      heroMobileLogo,
      heroSubheading,
      heroImage
    }
  },

  homeCards: state => {
    if (!state.homePageData) {
      return null
    }

    const { athletes_cards: athleteCards } = state.homePageData

    return athleteCards
  },

  athleteData: state => {
    if (!state.singleAthlete) {
      return null
    }

    const { achievements, year, birthday, coach, athlete_name: athleteName, hero_achievements: heroAchievements, hero_image: heroImage, hero_social_media: heroSocialMedia, hometown, motto, quote, slider } = state.singleAthlete

    const media = slider
      .map(slide => {
        if (slide.slider_image.url || slide.slider_link.url) {
          return {
            type: slide.slider_image.url ? 'photo' : slide.slider_link.url.split('www.')[1].split('.com')[0],
            media: {
              url: slide.slider_image.url || slide.slider_link.url,
              alt: slide.slider_image.alt || null
            }
          }
        }
      }).filter(el => el !== null)

    const socialMedia = heroSocialMedia
      .map(link => link.social_link.url ? link.social_link : null)
      .filter(el => el !== null)
      .map(el => {
        if (el && el.url) {
          const type = el.url.split('www.')[1].split('.com')[0]

          return {
            url: el.url,
            type
          }
        }
      })

    return {
      hero: {
        athleteName,
        year,
        heroAchievements,
        heroImage,
        socialMedia
      },
      bio: {
        birthday,
        hometown,
        coach,
        achievements,
        motto,
        quote
      },
      media: media[0] ? media : null
    }
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
