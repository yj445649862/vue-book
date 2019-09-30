import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import common from './modules/common'
import user from './modules/UserStore'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    common,user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
