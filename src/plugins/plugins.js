import Vue from 'vue'
import store from '../store'
Vue.directive('pPage', {
  inserted (el, binding, vnode, oldVnode) {
    var authKey = binding.value // 获取对应权限的标记
    let userAuth = store.state.user.userAuth
    if (!userAuth.hasOwnProperty(authKey)) {
      el.remove()
    }
  }
})
export default Vue
