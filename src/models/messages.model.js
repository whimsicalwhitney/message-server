const {queryForAllMessages, queryForUserMessages, insertMessage} = require('../db')

const getAllMessages = (sentAfter) => {
  const allMessages = queryForAllMessages(sentAfter)
  return allMessages
}

const getAllMessagesForUser = (user, sentAfter) => {
  const userMessages = queryForUserMessages(user, sentAfter)
  return userMessages
}

const addNewMessage = (message) => {
  return insertMessage({
    ...message,
    sentAt: new Date(),
    receivedAt: null,
    status: 'initiated',
    failedAt: null
  })
}

module.exports = {
  getAllMessages,
  getAllMessagesForUser,
  addNewMessage
}