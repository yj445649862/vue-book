<template>
    <div>
      <el-button @click="queryAllUserInfo">获取所有用户信息</el-button>
      <el-button @click="queryUserInfo">获取user信息</el-button>
      <el-button @click="updateUserInfo">更新user信息</el-button>
      <el-button @click="deleteUserInfo">删除user信息</el-button>
      <ul>
        <li v-for="item in operations" :key="item.id">
          {{item.id +'   '+ item.name}}
        </li>
      </ul>
    </div>
</template>

<script>
import api from '../../apis/UserApi'
export default {
  name: 'TestApi',
  data () {
    return {
      operations: []
    }
  },
  methods: {
    queryAllUserInfo () {
      let _this = this
      api.getAllUser().then(res => {
        _this.operations = res
      })
    },
    queryUserInfo () {
      let _this = this
      api.getUserInfo({id: '123'}).then(res => {
        _this.operations = res
      })
    },
    updateUserInfo () {
      let _this = this
      api.updateUserInfo({id: '123', name: '调皮一下'}).then(res => {
        _this.operations = res
      })
    },
    deleteUserInfo () {
      let _this = this
      api.deleteuserInfo({id: '123'}).then(res => {
        _this.operations = res
      })
    }
  }
}
</script>

<style scoped>

</style>
