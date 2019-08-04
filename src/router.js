/*
http://localhost:8080/?dev=1&questionid=40241
http://localhost:8080/?dev=1&courseid=21&momentid=1261
*/

import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/:elementName?',
    name: 'App',
    component: App
  }]
})
