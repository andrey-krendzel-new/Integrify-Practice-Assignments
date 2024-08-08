const http = require('http')
const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send({"message": "Hello, this is get response"});
})

app.post('/', (request, response) => {
  response.send({"message": "Hello, this is post response"});
})

app.put('/', (request, response) => {
  response.send({"message": "Hello, this is put response"});
})

app.delete('/', (request, response) => {
  response.send({"message": "Hello, this is delete response"});
})

app.patch('/', (request, response) => {
  response.send({"message": "Hello, this is patch response"});
})

const PORT = 5000
app.listen(PORT)
console.log(`Server running on port ${PORT}`)