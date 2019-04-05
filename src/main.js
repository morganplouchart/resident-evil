import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })
Vue.use(Vuetify)
Vue.use(VuePlyr)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
