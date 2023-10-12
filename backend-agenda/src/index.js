const express  = require('express')
const {port: APP_PORT, port} = require('./config/config')
const routerApi = require('./routes')

const app = express()

app.use(express.json())


app.listen(port, () => {
    console.log(`app running on ${port}`)
})
