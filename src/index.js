const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const path = require('path')

const app = express()
const port = process.env.PORT
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
