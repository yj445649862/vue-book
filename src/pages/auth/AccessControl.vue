<template>
     <div>
       <el-button type="primary" size="small" @click="getUserAuth">获取权限</el-button>
       <br/>
        用户权限 {{userAuth}}
       <br/>
       <el-button v-if="auth('requestInStore.getAll')">查询所有</el-button>
       <el-button v-if="auth('requestInStore.delete')">查询所有</el-button>
     </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'AccessControl',
  computed: {
    ...mapGetters({
      'userAuth': 'user/userAuth'
    })
  },
  methods: {
    ...mapActions({
      'queryUserAuth': 'user/queryUserAuth'
    }),
    getUserAuth () {
      this.queryUserAuth({userId: 123})
    }
  }
}
</script>

<style scoped>

</style>
