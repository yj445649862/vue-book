import Vue from 'vue'
import * as moment from 'moment'
Vue.filter('toString', (value) => {
  if (typeof value === 'string' || typeof value === 'number') {
    return value + ''
  }
  if (typeof value === 'object') {
    return JSON.stringify(value)
  }
})
Vue.filter('toDateStr', (value, formatter = 'YYYY-MM-DD') => {
  if (moment(value).isValid()) {
    return moment(value).format(formatter)
  } else {
    return value
  }
})
