const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connection')
require('dotenv').config()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('200 OK')
})

app.use('/api/v1/tasks', tasks)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(3000, console.log('server has started'))
  } catch (error) {
    console.log(error)
  }
}

start()