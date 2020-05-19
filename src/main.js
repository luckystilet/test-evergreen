import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import wave from './directives/wave'

import './assets/scss/style.css'

Vue.directive('wave', wave)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
