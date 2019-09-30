var express = require('express')
var router = express.Router()

let userList = [
  {id: 1, name: 'one'},
  {id: 2, name: 'two'},
  {id: 123, name: '123'}
]
router.get('/auth', (req, res, next) => {
  /**
   * key: 对应不同的页面标记，value数组对应相应页面中的某些资源权限
   */
  res.json({
    asdfa:['getAll','delete']
  })
})

router.get('/all', (req, res, next) => {
  res.json(userList)
})

router.get('/:id', (req, res, next) => {
  res.json(userList.filter(({id}) => id == req.params.id))
})
router.post('/:id', (req, res, next) => {
  userList.find(({id}) => id == req.params.id)['name'] = req.body.name
  res.json(userList)
})
router.delete('/:id', (req, res, next) => {
  res.json(userList.filter(({id}) => id != req.params.id))
})
router.get('/authapi', (req, res, next) => {
  res.json({name: 'andy'})
})

module.exports = router
