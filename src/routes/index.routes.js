const express = require('express')
const router = express.Router()
const {messsageRoutes} = require('./messages.routes')

router.use('/messages', messsageRoutes)

module.exports = {
  applicationRoutes: router
}