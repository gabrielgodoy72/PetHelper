import { sequelize, DataTypes } from '../../database';

const Estados = sequelize.define('Estados',
    {
        Id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        Nombre: { type: DataTypes.STRING, allowNull: false, unique: true}
    }, 
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName: true
    }
)

export default Estados
