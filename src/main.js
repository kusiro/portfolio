import Vue from 'vue'
import './plugins/base'
import App from './App.vue'

import './assets/main.scss'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
