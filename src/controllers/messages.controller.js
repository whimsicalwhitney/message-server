const {getAllMessages, getAllMessagesForUser, addNewMessage} = require('../models/messages.model')
const {getThirtyDaysAgo} = require('../utils')

// TODO request validation for valid date
const getMessages = (req, res) => {
  try {
    const sentAfter = req.query.sentAfter ? new Date(req.query.sentAfter) : getThirtyDaysAgo()
    const messages = getAllMessages(sentAfter)
    res.status(200)
    res.json({
      messages
    })
  } catch (e) {
    res.status(500)
    res.json({
      error: e.message
    })
  }
}

// TODO request validation for valid date
// TODO have a user lookup and provide meaningful response codes if user doesn't exist (404)
// versus user existing and having no messages
const getMessagesForUser = (req, res) => {
  try {
    const user = req.params.user
    const sentAfter = req.query.sentAfter ? new Date(req.query.sentAfter) : getThirtyDaysAgo()
    const messages = getAllMessagesForUser(user, sentAfter)
    res.status(200)
    res.json({
      messages
    })
  } catch (e) {
    res.status(500)
    res.json({
      error: e.message
    })
  }
}

// TODO request validation for request body
const sendMessage = (req, res) => {
  try {
    const message = req.body
    const messages = addNewMessage(message)
    res.status(200)
    res.json({
      messages
    })
  } catch (e) {
    res.status(500)
    res.json({
      error: e.message
    })
  }
}

module.exports = {
  getMessages,
  getMessagesForUser,
  sendMessage
}