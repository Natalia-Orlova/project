import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: new Vuex.Store(store),
  router
}).$mount('#app')
