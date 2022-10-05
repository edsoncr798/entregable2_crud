//* /users [POST, GET]
//* /users:id [GET]

const router = require('express').Router()


const userServices = require('./users.services')

router.get('/users', userServices.getUser)

router.post('users', userServices.createNewUser)

router.get('/users/:id', userServices.getOneUser)


module.exports = router