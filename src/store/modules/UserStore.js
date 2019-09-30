import api from '../../apis/UserApi'
let state = {
  userList: [],
  userAuth: {
    demo: ['getAll', 'delete']
  }
}
let getters = {
  userList: state => state.userList,
  userAuth: state => state.userAuth
}
let mutations = {
  setUserList (state, data) {
    state.userList = data
  },
  setUserAuth (state, data) {
    state.userAuth = data
  }
}
let actions = {

  queryUserAuth ({commit, dispatch}, data) {
    api.getUserAuth(data)
      .then(res => {
        commit('setUserAuth', res)
      })
      .catch()
  },
  queryAllUser ({commit, state, dispatch}) {
    api.getAllUser()
      .then(res => {
        commit('setUserList', res)
        dispatch('common/queryOrderList', {id: 123}, {root: true})
      })
      .catch()
  },
  updateUser ({commit, state}, data) {
    api.updateUserInfo(data)
      .then(res => commit('setUserList', res))
      .catch()
  },
  deleteUser ({commit, state}, data) {
    api.deleteuserInfo(data)
      .then(res => commit('setUserList', res))
      .catch()
  }
}

export default {
  namespaced: true, state, getters, actions, mutations
}
