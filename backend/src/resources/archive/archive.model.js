import { sequelize, DataTypes } from '../../database'
import Sexo from '../sex/sex.model'
import Raza from '../race/race.model'
import Usuario from '../credentials/user/user.model'
import Estado from '../state/state.model'

const Ficha = sequelize.define('Fichas',
    {
        Id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        Nombre: { type: DataTypes.STRING },
        Edad: { type: DataTypes.STRING },
        FechaPublicacion: { type: DataTypes.DATE, allowNull: false },
        Descripcion: { type: DataTypes.STRING }
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName: true
    }
)

Ficha.belongsTo(Sexo, {foreignKey: 'SexoId'})
Ficha.belongsTo(Raza, {foreignKey: 'RazaId'})
Ficha.belongsTo(Usuario, {foreignKey: 'UsuarioId'})
Ficha.belongsTo(Estado, {foreignKey: 'EstadoId'})

export default Ficha
