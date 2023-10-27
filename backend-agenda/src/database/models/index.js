const {User, UserSchema } = require('./user.model.js')
const {Agenda, AgendaSchema } = require('./agenda.model.js')
const {Area, AreaSchema } = require('./area.model.js')

function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize))
    User.associate(sequelize.models)

    Agenda.init(AgendaSchema, Agenda.config(sequelize))
    Agenda.associate(sequelize.models)

    Area.init(AreaSchema, Area.config(sequelize))
    Area.associate(sequelize.models)
}

module.exports = setupModels