const express = require('express')
const router = express.Router()
const {getAllTodo, createTodo, deleteTodo} = require('../controllers/app')

router.get('/homepage',getAllTodo)
router.post('/homepage',createTodo)
router.get('/homepage/delete/:id',deleteTodo)

module.exports = router