const {Router} = require('express')
const UserRouter = require('./users.routes')
const AgendaRouter = require('./agendas.routes')
const AreaRouter = require('./areas.routes')

function routerApi (app){
    const router = Router()

    app.use('/api/v1', router)
    router.use('/users', UserRouter) 
    
    app.use('/api/v1', router)
    router.use('/agendas', AgendaRouter) 

    app.use('/api/v1', router)
    router.use('/areas', AreaRouter) 
}

module.exports = routerApi