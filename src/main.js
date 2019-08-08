import Vue from 'vue'
import App from './App.vue'
import VueElElements from './wrapper.js'

import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/darkula.css'

import router from './router.js'

hljs.initHighlightingOnLoad()
window.refreshHljs = () => {
  hljs.initHighlighting.called = false
  hljs.initHighlighting()
}

Vue.config.productionTip = false

Object.entries(VueElElements)
  .forEach(([type, ElElement]) => {
    Vue.component(type, ElElement)
  })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
