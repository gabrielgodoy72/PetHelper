import { sequelize, DataTypes } from '../../database'
import Especie from '../species/species.model'

const Razas = sequelize.define('Razas',
    {
        Id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        Nombre: { type: DataTypes.STRING, allowNull: false }
    }, 
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName: true
    }
)

Razas.belongsTo(Especie, {as: "Especie", foreignKey: 'EspecieId'})

export default Razas
