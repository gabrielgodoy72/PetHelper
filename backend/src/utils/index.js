import bcryptjs from "bcryptjs"
import Roles from "../resources/credentials/role/role.model"
import Usuarios from "../resources/credentials/user/user.model"
import Roles_Usuario from '../resources/credentials/user_role/user_role.model'
import Estados from '../resources/state/state.model'
import Especies from '../resources/species/species.model'
import Sexos from '../resources/sex/sex.model'
import Razas from '../resources/race/race.model'
import Archivos from '../resources/archive/archive.model'
import ImagenDeFicha from "../resources/archive_img/archive_img.model"

export const encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10)
    return await bcryptjs.hash(password, salt)
}

export const comparePassword = async (password, receivedPassword) => {
    return await bcryptjs.compare(password, receivedPassword)
}

export const createTables = async () => { 
    try {
        await Roles.sync()
        await Estados.sync()
        await Sexos.sync()
        await Especies.sync()
        await Razas.sync({alter: true}),
        await Usuarios.sync(),
        await Roles_Usuario.sync()
        await Archivos.sync()
        await ImagenDeFicha.sync()
    } catch (error) {
        console.log('\n\tOcurrió un error con la conexion a la BD\n', error.message)
    }
} 

export const initTables = async () => {
    try {
        const countRoles = await Roles.count()
        if(!countRoles) {
            await Roles.create({Nombre: 'Admin'}),
            await Roles.create({Nombre: 'Moderator'}),
            await Roles.create({Nombre: 'User'})
        } 
        
        const countEstados = await Estados.count()
        if(!countEstados) {
            await Estados.create({Nombre: 'Para Adoptar'}),
            await Estados.create({Nombre: 'Reportado'})
        }
        
        const countSexos = await Sexos.count()
        if(!countSexos) {
            await Sexos.create({Nombre: 'Macho'}),
            await Sexos.create({Nombre: 'Hembra'}),
            await Sexos.create({Nombre: 'No Sabe'})
        } 

        const countEspecies = await Especies.count()
        if(!countEspecies) {
            await Especies.create({Nombre: 'Perro'}),
            await Especies.create({Nombre: 'Gato'})
        }
        
        const countRazas = await Razas.count()
        if(!countRazas) {
            const perro = await Especies.findOne({ where: {Nombre: 'Perro' }})
            const gato = await Especies.findOne({ where: {Nombre: 'Gato' }})
            await Razas.create({ Nombre: 'Mestizo', EspecieId: gato.dataValues.Id })
            await Razas.create({ Nombre: 'Boxer', EspecieId: perro.dataValues.Id })
            await Razas.create({ Nombre: 'Siames', EspecieId: gato.dataValues.Id })
            await Razas.create({ Nombre: 'Persa', EspecieId: gato.dataValues.Id })
            await Razas.create({ Nombre: 'Maine Coon', EspecieId: gato.dataValues.Id })
            await Razas.create({ Nombre: 'Bengala', EspecieId: gato.dataValues.Id })
            await Razas.create({ Nombre: 'Angora', EspecieId: gato.dataValues.Id })
            await Razas.create({ Nombre: 'Mestizo', EspecieId: perro.dataValues.Id })
            await Razas.create({ Nombre: 'Chihuahua', EspecieId: perro.dataValues.Id })
            await Razas.create({ Nombre: 'Poodle', EspecieId: perro.dataValues.Id })
            await Razas.create({ Nombre: 'Labrador Retriever', EspecieId: perro.dataValues.Id })
            await Razas.create({ Nombre: 'Pug', EspecieId: perro.dataValues.Id })  
        }
    } catch (error) {
    console.log(`\n\tFalló la carga de datos\n`, error.message)        
    }
    
}
