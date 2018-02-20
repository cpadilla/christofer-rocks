// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'

// Vue.use(VueRouter)

// const router = new VueRouter()

Vue.config.productionTip = false

// const routes = [
//   {
//     path: '/',
//     component: App,
//     meta: {}
//   }
// ]

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  meta: {
    title: 'Chris'
  },
  template: '<App/>',
  data: {
    art: [
      {text: 'test message 1'},
      {text: 'test message 2'},
      {text: 'test message 3'}
    ]
  }
})

// new Vue({
//   el: '#Art',
//   router,
//   componenets: { Art },
//   template: '<Art/>',
//   data: {
//     art: [
//       {text: 'testmessage1'}
//     ]
//   }

// })

// router.map({
//   '#Art': {
//     component: Art
//   }
// })
