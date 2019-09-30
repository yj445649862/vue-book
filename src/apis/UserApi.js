
import * as promise from '../utils/promise'

export default {
  getUserInfo: (params) => promise.promiseGet('/user/:id', params), // 根据id查询用户
  updateUserInfo: (params) => promise.promisePost('/user/:id', params), // 编辑用户
  deleteuserInfo: (params) => promise.promiseDelete('/user/:id', params), // 删除用户
  getAllUser: params => promise.promiseGet('/user/all', params), // 查询所有用户
  getUserAuth: params => promise.promiseGet('/user/auth', params), // 获取当前用户权限
  getOrder: params => promise.promiseGet('/order/getOrder', params) // 增加订单获取  --
}
