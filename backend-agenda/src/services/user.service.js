const {models} = require('./../libs/sequelize')

class UserService {
    constructor(){
        this.model = models.User
    }
    
    async getALL(){
        const users = await this.model.findAll()
        return users
    }
}

module.exports = UserService