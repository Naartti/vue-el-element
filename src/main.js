import Vue from 'vue'
import App from './App.vue'
import VueElElements from './wrapper.js'

import hljs from 'highlight.js'
// import 'highlight.js/styles/a11y-light.css'
import 'highlight.js/styles/github.css'
hljs.initHighlightingOnLoad()
window.hljs = hljs
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
  render: h => h(App)
}).$mount('#app')
