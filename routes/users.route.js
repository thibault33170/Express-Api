const express = require('express')
const router = express.Router()

const UserController = require('../app/controllers/users.controller')

/**
 * index
 */
router.get('/', (req, res) => {
    UserController.findAll(users => {
        res.json(users)
    })
})

/**
 * show
 */
router.get('/:id', (req, res) => {
    UserController.findOne(req.params.id, user => {
        res.json(user)
    })
})

/**
 * create
 */
router.get('/create', (req, res) => {
    res.json('create')
})

/**
 * store
 */
router.post('/', (req, res) => {
    UserController.create(req.body)
    res.send('success')
})

/**
 * update
 */
router.put('/:id', (req, res) => {
    UserController.update(req.params.id, req.body, user => {
        res.json(user)
    })
})

/**
 * delete
 */
router.delete('/:id', (req, res) => {
    UserController.delete(req.params.id, user => {
        res.send(user.username + 'deleted successfully !')
    })
})

module.exports = router