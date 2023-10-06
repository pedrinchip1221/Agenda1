const { UserSchema } = require('./user.model.js')

function setupModels(sequelize){
    User.init(UserSchema, User.Config(sequelize))
    User.associate(sequelize.models)
}

module.exports = setupModels