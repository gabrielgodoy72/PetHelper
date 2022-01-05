import { sequelize, DataTypes } from '../../database'
import Ficha from '../archive/archive.model'

const ImagenDeFicha = sequelize.define('Imagenes_Archivo',
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

ImagenDeFicha.belongsTo(Ficha, {as: "Ficha", foreignKey: 'FichaId'})

export default ImagenDeFicha
