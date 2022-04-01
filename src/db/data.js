const messages = [
  {
    recipient: 'user2',
    sender: 'user1',
    sentAt: new Date('2022-03-30T15:27:11.459Z'),
    receivedAt: new Date('2022-03-30T15:27:11.631Z'),
    message: 'hey gurl hey',
    status: 'delivered',
    failedAt: null
  },
  {
    recipient: 'user2',
    sender: 'user5',
    sentAt: new Date('2022-03-31T15:27:11.459Z'),
    receivedAt: null,
    message: 'in the mountains, may lose service',
    status: 'failed',
    failedAt: new Date('2022-03-31T15:27:12.500Z')
  },
  {
    recipient: 'user3',
    sender: 'user4',
    sentAt: new Date('2022-02-14T12:25:12.758Z'),
    receivedAt: new Date('2022-02-14T12:25:13.001Z'),
    message: 'wine and sushi?',
    status: 'delivered',
    failedAt: null
  },
  {
    recipient: 'user3',
    sender: 'user2',
    sentAt: new Date('2022-01-01T00:00:00.459Z'),
    receivedAt: new Date('2022-01-01T00:00:01.202Z'),
    message: 'happy new year!',
    status: 'delivered',
    failedAt: null
  },
  {
    recipient: 'user3',
    sender: 'user4',
    sentAt: new Date('2022-03-31T18:53:21.095Z'),
    receivedAt: new Date('2022-03-31T18:53:21.795Z'),
    message: ':sparkles:',
    status: 'delivered',
    failedAt: null
  },
  {
    recipient: 'user4',
    sender: 'user1',
    sentAt: new Date('2022-03-28T18:51:24.725Z'),
    receivedAt: new Date('2022-03-28T18:51:24.925Z'),
    message: 'where did you put the hair dryer??',
    status: 'delivered',
    failedAt: null
  },
  {
    recipient: 'user1',
    sender: 'user5',
    sentAt: new Date('2022-03-29T18:49:21.159Z'),
    receivedAt: new Date('2022-03-29T18:49:21.557Z'),
    message: 'post hike beer?',
    status: 'delivered',
    failedAt: null
  }
]

module.exports = {
  messages
}