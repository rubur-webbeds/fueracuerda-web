import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueLayers, {
  dataProjection: 'EPSG:4326',
})
