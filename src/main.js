import Vue from 'vue'
import VeeValidate from 'vee-validate'

import { store } from './components/_store'
import { router } from './components/_helpers'
import App from './components/app/App'
import Vuex from 'vuex'


// console.log({Vuex})

Vue.config.productionTip = false

Vue.use(VeeValidate);
Vue.use(Vuex)

import { configureFakeBackend } from './components/_helpers'
configureFakeBackend()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
