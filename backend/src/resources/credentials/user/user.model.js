import { sequelize, DataTypes } from '../../../database'

const Usuarios = sequelize.define('Usuarios', 
    {
        Id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        Email: {type: DataTypes.STRING, allowNull: false, unique: true},
        PasswordHash: {type: DataTypes.STRING, allowNull: false},
        Nombre: {type: DataTypes.STRING, allowNull: false},
        Telefono: {type: DataTypes.STRING, allowNull: false},
        Direccion: {type: DataTypes.STRING, allowNull: false},
    }, 
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName: true
    }
)

export default Usuarios
