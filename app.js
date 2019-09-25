require('dotenv').config()

let express = require('express')
let app = express()
let File = require('./controllers/filesController')
let User = require('./controllers/userController')
let Task = require('./controllers/taskController')
let sequelize= require('./db')

sequelize.sync()
app.use(express.json())

app.use(require('./middleware/headers'))
app.use('/user', User)

app.use(require('./middleware/validate-session'))
app.use('/file', File)
app.use('/task', Task)

app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on ${process.env.PORT}... Hopefully`)
})