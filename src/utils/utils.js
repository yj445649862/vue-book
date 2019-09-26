/**
 * url 参数替换
 * @param url
 * @param params
 * @returns {*}
 */
export function translate (url, params = null) {
  if (!params) return url
  let key
  for (key in params) {
    url = url.replace(`:${key}`, params[key])
  }
  return url
}
