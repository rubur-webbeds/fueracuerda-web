import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'
import VueJsonLD from 'vue-jsonld'
import 'vue-video-section/dist/vue-video-section.css'


import VueVideoSection from 'vue-video-section'
Vue.component('vue-video-section', VueVideoSection)

Vue.config.productionTip = false

Vue.use(VueLayers, {
  dataProjection: 'EPSG:4326',
})

Vue.use(VueJsonLD)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
