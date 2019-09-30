import api from '../../apis/UserApi'

let state = {
  orderList: []
}

let getters = {
  orderList: state => state.orderList
}

let mutations = {
  changeOrderList (state, data) {
    state.orderList = data
  }
}

let actions = {
  queryOrderList ({commit}, data) {
    api.getOrder(data)
      .then(res => commit('changeOrderList', res))
      .catch()
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
