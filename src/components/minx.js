import Vue from 'vue'
import {mapActions, mapGetters} from 'vuex'
import get from 'lodash/get'
Vue.mixin({
  computed: {
    ...mapGetters({
      getAuth: 'user/userAuth'
    })
  },
  methods: {
    ...mapActions({
      'queryAuth': 'user/queryUserAuth'
    }),
    auth (key) {
      return !!get(this.getAuth, key, false)// lodash的get方法
      // https://www.lodashjs.com/docs/latest#_getobject-path-defaultvalue
    }
  }
})
