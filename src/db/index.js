const {messages} = require('./data')

const queryForAllMessages = (sentAfter) => {
  return messages.filter(({sentAt}) => sentAt > sentAfter)
}

const queryForUserMessages = (user, sentAfter) => {
  return messages
    .filter(({recipient, sender}) => recipient === user || sender === user)
    .filter(({sentAt}) => sentAt > sentAfter)
}

const insertMessage = (message) => {
  messages.push(message)
  return messages
}

module.exports = {
  queryForAllMessages,
  queryForUserMessages,
  insertMessage
}