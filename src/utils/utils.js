/**
 * url 参数替换
 * @param url
 * @param params
 * @returns {*}
 *
 * http://127.0.0.1:3000/user/:id 转换成 http://127.0.0.1:3000/user/123123123123
 */
export function translate (url, params = null) {
  if (!params) return url
  let key
  for (key in params) {
    url = url.replace(`:${key}`, params[key])
  }
  return url
}
