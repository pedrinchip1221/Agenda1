const {Router} = require('express')
const UserRouter = require('./users.routes')

function routerApi (app){
    const router = Router()

    app.use('/api/v1', router)
    router.use('/users', UserRouter)    
}

module.exports = routerApi