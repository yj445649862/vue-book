var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({name: 222})
})
router.get('/jsonp', (req, res, next) => {
  var response = {name: 3333}
  setTimeout(()=>{
    res.end("callBack" + '(' + JSON.stringify(response) + ')')
  },3000)
})

module.exports = router
