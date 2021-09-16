// import {createApp} from 'vue'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import mixin from './mixin/mixin.js'
// Vue.config.productionTip = false

import PageTitle from './components/PageTitle'
// import ProvideInjectChild from './views/tutorial/ProvideInjectChild'
Vue.component('PageTitle',PageTitle)
// Vue.component('ProvideInjectChild',ProvideInjectChild)


new Vue({
  vuetify,
  store,
  router,
  mixin,
  render: h => h(App)
}).$mount('#app')

// const app = createApp(App)
// app.use(router, vuetify, store)
// app.mixin(mixin)
// app.mount('#app')
