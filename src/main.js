// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import store from './store'
import '@/utils/filter';
import directive from './plugins/plugins'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css';
import './components/minx'
Vue.config.productionTip = false
Vue.directive(directive)
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
