import Vue from 'vue'
import App from './App.vue'
import VueElElements from './wrapper.js'

Vue.config.productionTip = false

Object.entries(VueElElements)
  .forEach(([type, ElElement]) => {
    Vue.component(type, ElElement)
  })

new Vue({
  render: h => h(App)
}).$mount('#app')
