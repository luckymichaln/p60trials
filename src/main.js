import Vue from 'vue'
import store from './store'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VuePlyr from 'vue-plyr';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faYoutube, faInstagram, faVimeoV } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRellax from 'vue-rellax'
import App from './App.vue'
import router from './router'
import '@/assets/styles/main.scss'

library.add(
  faGlobeAfrica,
  faFacebookF,
  faInstagram,
  faYoutube,
  faVimeoV
)

Vue.use(VueAwesomeSwiper)
Vue.use(VuePlyr)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer
})

Vue.use(VueRellax)

const vm = new Vue({
  el: '#app'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
