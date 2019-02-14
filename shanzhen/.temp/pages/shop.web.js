import Vue from 'vue'
import weex from 'weex-vue-render'
// import App from 'path/to/index.vue'
// import router from 'router.js'

// App.el = '#root'
// App.router = router
// export default new Vue(App)

// router.push('/')

weex.init(Vue)

const App = require('../../src/pages/shop.vue');
new Vue(Vue.util.extend({el: '#root'}, App));
