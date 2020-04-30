import Vue from 'vue'
import App from '@/App.vue'
import VueElElements from '@/wrapper/index.js'

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

Vue.use(VueElElements)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
