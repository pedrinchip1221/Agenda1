const UserService = require('./../services/user.service')

class UserController{
    constructor(){
        this.service = new UserService()
    }

    async index(){
        const users = await this.service.getALL()
        return users
    }
}

module.exports = UserController