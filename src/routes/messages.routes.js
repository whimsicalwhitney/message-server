const express = require('express')
const router = express.Router()
const {getMessages, getMessagesForUser, sendMessage} = require('../controllers/messages.controller')

router.get('/', getMessages)

router.get('/:user', getMessagesForUser)

router.post('/', sendMessage)

module.exports = {
  messsageRoutes: router
}