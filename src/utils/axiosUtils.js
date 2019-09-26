import axios from 'axios'
// import qs from 'qs'
import {baseUrl} from '@/config/domain'
axios.defaults.headers.common = {
  'Content-Type': 'application/json;charset=UTF-8',
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.baseURL = baseUrl
axios.defaults.withCredentials = false
axios.defaults.timeout = 10000
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error.response.data)
})
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error.response.data)
})
axios.jsonp = (url) => {
  return new Promise((resolve, reject) => {
    window.callBack = (e) => {
      resolve(e)
    }
    let scriptEle = document.createElement('script')
    scriptEle.crossOrigin = true
    scriptEle.src = url
    scriptEle.addEventListener('load', () => {
      document.body.removeChild(scriptEle)
      window.callBack = null
    })
    document.body.appendChild(scriptEle)
  })
}
export default axios
