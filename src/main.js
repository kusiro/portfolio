import Vue from 'vue'
import './plugins/base'
import App from './App.vue'

import './styles/main.scss'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
