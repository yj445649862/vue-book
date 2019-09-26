let env = process.env.NODE_ENV || 'development'
module.exports = ({
  'development': {
    baseUrl: 'http://127.0.0.1:3000',
    otherUrl: 'https://your-.com'
  },
  'testing': {

  },
  'preproduction': {

  },
  'produ': {

  }
})[env]
