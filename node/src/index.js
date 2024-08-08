const express = require('express')
const app =express()

let notes = [
  ...
]


app.get('/', (request, response)) => {
  response.send('<h1>Hello World!'<h1>)
})

app.get('/api/notes', (request, response)) => {
  response.json(notes)
})



const Port = 3001
app.listen(Port, () 
console.log('Server running on port ${PORT'}')