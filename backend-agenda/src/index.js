const express  = require('express')
const {port: APP_PORT, port} = require('./config/config')
const cors = require('cors')
const routerApi = require('./routes')
const router = require('./routes/users.routes')


const app = express()

app.use(express.json())
app.use(cors())

routerApi(app)

app.listen(APP_PORT, () => {
    console.log(`app running on ${APP_PORT}`)
})
