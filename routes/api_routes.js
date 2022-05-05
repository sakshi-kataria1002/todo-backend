const express = require('express')
const router = express.Router()
const Controller = require('../controller/controller')

router.get('/', Controller.showIndex)

router.post('/create-Todo', Controller.createTodo)
router.get('/get-Todo', Controller.getTodo)
router.get('/get-TodoById/:id', Controller.getTodoById)
router.delete('/delete-TodoById/:id', Controller.deleteTodoById)
router.put('/update-Todo/:id', Controller.updateTodo)

module.exports = router
