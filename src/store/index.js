import Vue from 'vue'
import Vuex from 'vuex'
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
    commit('SET_CONTENT_LOADED', { data: false })
    try {
      const api = await Prismic.getApi(endpoint)
      const { data } = await api.getSingle('home_page')

      if (data) {
        commit('SET_HP_DATA', { data })
      }

      console.log({ GET_HP_DATA: data })

      commit('SET_CONTENT_LOADED', { data: true })
      return data
    } catch (err) {
      console.error(err)
    }
  },

  async GET_ATHLETE_DATA({ state, commit }, { uid }) {
    commit('SET_CONTENT_LOADED', { data: false })
    try {
      const api = await Prismic.getApi(endpoint)
      const { data } = await api.getByUID('athlete_page', uid)

      if (data) {
        commit('SET_ATHLETE_DATA', { data })
      }

      console.log({ GET_ATHLETE_DATA: data })

      commit('SET_CONTENT_LOADED', { data: true })
      return data
    } catch (err) {
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

  SET_CONTENT_LOADED(state, { data }) {
    state.isContentLoaded = data
  }
}

const getters = {
  homeHeroData: state => {
    if (state.homePageData) {
      const { background_logo: bgcLogo, hero_logo: heroLogo, hero_subheading: heroSubheading, home_hero_image: heroImage } = state.homePageData

      return {
        bgcLogo,
        heroLogo,
        heroSubheading,
        heroImage
      }
    }
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
