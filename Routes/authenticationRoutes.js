const express = require('express')
const { createNewUser, userLogin } = require('../Controllers/Authentication')
const verifyTokenAuth = require('../Controllers/verification')
const router = express()


router.post('/register', createNewUser)

router.post('/login', userLogin)

router.post('/profile-page', verifyTokenAuth)

module.exports = router