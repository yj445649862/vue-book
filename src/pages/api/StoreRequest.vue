<template>
   <div>
     <el-button @click="queryAll">store内查询用户</el-button>
     <el-button @click="deleteUserTrigger">store内删除用户</el-button>
     <el-button @click="updateUserTrigger">store内修改用户</el-button>
     <hr/>
     {{userList}}
     <hr/>
     {{orderList}}
   </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'StoreRequest',
  computed: {
    ...mapGetters({
      userList: 'user/userList',
      orderList:'common/orderList'
    })
  },
  methods: {
    ...mapActions({
      queryAll: 'user/queryAllUser',
      updateUser: 'user/updateUser',
      deleteUser: 'user/deleteUser'
    }),
    deleteUserTrigger () {
      this.deleteUser({id: 123})
    },
    updateUserTrigger () {
      let user = {id: 123, name: '改个名字'}
      this.updateUser(user)
    }
  }
}
</script>

<style scoped>

</style>
