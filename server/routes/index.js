var express = require('express')
var router = express.Router()

router.get('/getOrder', function (req, res, next) {
  res.json([{id: '1', price: 123}, {id: '1', price: 123}, {id: '1', price: 123}, {id: '1', price: 123}])
})

module.exports = router
