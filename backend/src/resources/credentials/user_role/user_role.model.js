import { sequelize, DataTypes } from '../../../database'
import User from '../user/user.model'
import Role from '../role/role.model'

const UserRoles = sequelize.define('Roles_Usuario',
    {
        Id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName: true
    }
)

UserRoles.belongsTo(User, {foreignKey: 'UsuarioId'})
UserRoles.belongsTo(Role, {foreignKey: 'RolId'})

export default UserRoles
