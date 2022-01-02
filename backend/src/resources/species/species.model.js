import { sequelize, DataTypes } from '../../database';

const Especies = sequelize.define('Especies',
    {
        Id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        Nombre: { type: DataTypes.STRING, allowNull: false, unique: true }
    }, 
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName: true
    }
)

export default Especies
