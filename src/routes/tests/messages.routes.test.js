const test = require('ava')
const request = require('supertest')
const {app} = require('../../index')

test('GET /messages succeeds with 200', async (t) => {
  const response = await request(app)
    .get('/messages')
    t.is(response.status, 200)
})

test('GET /messages returns messages from sentAfter date', async (t) => {
  const expectedResponse = {
    messages: [
     {
        failedAt: null,
        message: ':sparkles:',
        receivedAt: '2022-03-31T18:53:21.795Z',
        recipient: 'user3',
        sender: 'user4',
        sentAt: '2022-03-31T18:53:21.095Z',
        status: 'delivered',
     },
   ]
  }
  const response = await request(app)
    .get('/messages?sentAfter=2022-03-31T18:53:21.094Z')
    t.deepEqual(response.body, expectedResponse)
})

test.todo('GET /messages returns messages from last 30 days')

test.todo('GET /messages returns max 100 messages')

test.todo('GET /messages returns 400 on invalid date')

test.todo('GET /messages/:user returns 200 for existing user')

test.todo('GET /messages/:user returns 404 for non-existing user')

test.todo('GET /messages/:user returns messages from sentAfter date')

test.todo('GET /messages/:user returns max 100 messages')