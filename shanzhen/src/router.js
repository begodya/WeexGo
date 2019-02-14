import Router from 'vue-router'
import ViewHome from './pages/home.vue'
import ViewTopic from './pages/topic.vue'
import ViewClass from './pages/class.vue'
import ViewShop from './pages/shop.vue'
import ViewAccount from './pages/account.vue'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: ViewHome },
    { path: '/topic', component: ViewTopic },
    { path: '/class', component: ViewClass },
    { path: '/shop', component: ViewShop },
    { path: '/account', component: ViewAccount }
  ]
})
