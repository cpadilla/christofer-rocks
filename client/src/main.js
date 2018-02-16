// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Art from './components/Art.vue'
import router from './router'
// import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'

// Vue.use(VueRouter)

// const router = new VueRouter()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// router.map({
//   '#Art': {
//     component: Art
//   }
// })
