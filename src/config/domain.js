let env = process.env.NODE_ENV || 'development'
module.exports = ({
  'development': {
    baseUrl: 'http://127.0.0.1:3000',
    otherUrl: 'https://your-.com'
  },
  'testing': {
    baseUrl: 'http://10.0.13.123:3000',
    otherUrl: 'https://your-.com'
  },
  'preproduction': {
    baseUrl: 'http://127.0.0.1:3000',
    otherUrl: 'https://your-.com'
  },
  'produ': {
    baseUrl: 'http://127.0.0.1:3000',
    otherUrl: 'https://your-.com'
  }
})[env]
