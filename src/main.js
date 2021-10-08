import Vue from 'vue'
import { get } from 'lodash'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from './firebase'
import vuetify from './plugins/vuetify'
import '../public/style/critical.css'
import './middlewares'
import 'aos/dist/aos.css';
import JsonViewer from 'vue-json-viewer'
import VueYoutube from 'vue-youtube'
import { VueMaskDirective } from 'v-mask'

Vue.prototype.$get = get
Vue.prototype.$firebase = firebase

// Import JsonViewer as a Vue.js plugin
Vue.use(JsonViewer)
Vue.use(VueYoutube)

Vue.directive('mask', VueMaskDirective);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
