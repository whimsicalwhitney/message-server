## Setup

`npm i`

See package.json engines section for npm and node requirements.


## Usage

To run locally: `npm start`

To run tests: `npm test`

### Routes

#### **GET /messages**


Get all messages. An optional query param of `sentAfter` can be supplied, otherwise messages will be returned from the last 30 days.

```curl
curl --location --request GET 'http://localhost:3000/messages?sentAfter=2022-01-15T15:15:32.775Z'
```

#### **GET /messages/:user**


Get all sent and received messages for a user. Currently will return an empty messages array if no messages or user are found (todo will 404 on non existent user). An optional query param of `sentAfter` can be supplied, otherwise messages will be returned from the last 30 days.

```curl
curl --location --request GET 'http://localhost:3000/messages/user1'
```


#### **POST /messages**

Sends a message. Todo: needs request body validation.


```curl
curl --location --request POST 'http://localhost:3000/messages' \
--header 'Content-Type: application/json' \
--data-raw '        {
            "recipient": "user1",
            "sender": "user5",
            "message": "post hike beer?"
        }'
```

## Thoughts on implementation

* This architecture is overly abstracted for the size of this project but I wanted to give a flavor of how I'd structure a more robust app.
* I chose to use a quick, in-memory object vs setting up a db in order to speed development.
* I used some external packages in development. I chose them because 1) I was familiar with them and could get developing quickly and 2) they are all widely used and common packages in node development.
* Lots of ideas on different ways to structure endpoints based on product requirements.
* Currently returns all results but would add code to handle 100 messages requirement when adding more mock data.