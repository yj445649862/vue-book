import axios from 'axios'
import {translate} from './utils'

export function promiseGet (url, params) {
  return axios.get(translate(url, params), {params})
}
export function promisePost (url, params) {
  return axios.post(translate(url, params), params)
}

export function promiseDelete (url, params) {
  return axios.delete(translate(url, params), params)
}

export function promisePut (url, params) {
  return axios.put(translate(url, params), params)
}
