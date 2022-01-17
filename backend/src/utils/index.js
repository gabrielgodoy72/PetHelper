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
        await Usuarios.sync(),//
        await Roles.sync()//
        await Estados.sync()//
        await Sexos.sync()//
        await Especies.sync()//
        await Razas.sync(),//
        await Archivos.sync()//
        await Roles_Usuario.sync()//
        await ImagenDeFicha.sync()
    } catch (error) {
        console.log('\n\tOcurrió un error con la conexion a la BD\n', error.message)
    }
}

export const initTables = async () => {
    try {
        const countUsuarios = await Usuarios.count()
        if(!countUsuarios) {
            await Usuarios.create({ Email: 'ana@gmail.com', PasswordHash: 'ana123', Nombre: 'Ana López', Telefono: '0985998877', Direccion: 'Asunción' })
            await Usuarios.create({ Email: 'pepe@gmail.com', PasswordHash: 'pepe123', Nombre: 'Pepe Perez', Telefono: '0985776655', Direccion: 'Encarnación' })
            await Usuarios.create({ Email: 'luis@gmail.com', PasswordHash: 'luis123', Nombre: 'Luís Giménez', Telefono: '0985665544', Direccion: 'Cambyreta' })
            await Usuarios.create({ Email: 'ema@gmail.com', PasswordHash: 'ema123', Nombre: 'Ema Núñez', Telefono: '0985554433', Direccion: 'San Juan del Paraná' })
            await Usuarios.create({ Email: 'andrea@gmail.com', PasswordHash: 'andrea123', Nombre: 'Andrea Servin', Telefono: '0985443322', Direccion: 'Encarnación' })
            await Usuarios.create({ Email: 'gabriel@gmail.com', PasswordHash: 'gabriel123', Nombre: 'Gabriel Godoy', Telefono: '0985332211', Direccion: 'San Juan del Paraná' })
        }

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

        const countArchivos = await Archivos.count()
        if(!countArchivos) {
            await Archivos.create({Edad: '2 meses', FechaPublicacion: '2021-01-12', Descripcion: null, SexoId: 2, RazaId: 1, UsuarioId: 3, EstadoId: 1, Nombre: 'Luna'})
            await Archivos.create({Edad: '3 semanas', FechaPublicacion: '2021-01-12', Descripcion: null, SexoId: 2, RazaId: 12, UsuarioId: 1, EstadoId: 1, Nombre: 'Kira'})
            await Archivos.create({Edad: null, FechaPublicacion: '2021-01-13', Descripcion: null, SexoId: 2, RazaId: 8, UsuarioId: 1, EstadoId: 2, Nombre: null})
            await Archivos.create({Edad: null, FechaPublicacion: '2021-01-14', Descripcion: null, SexoId: 2, RazaId: 1, UsuarioId: 2, EstadoId: 2, Nombre: null})
            await Archivos.create({Edad: '1 mes', FechaPublicacion: '2021-01-15', Descripcion: null, SexoId: 2, RazaId: 1, UsuarioId: 4, EstadoId: 1, Nombre: 'Nala'})
            await Archivos.create({Edad: '2 meses', FechaPublicacion: '2021-01-15', Descripcion: null, SexoId: 2, RazaId: 1, UsuarioId: 4, EstadoId: 1, Nombre: 'Lola'})
            await Archivos.create({Edad: '1 mes', FechaPublicacion: '2021-01-15', Descripcion: null, SexoId: 2, RazaId: 1, UsuarioId: 1, EstadoId: 1, Nombre: 'Bella'})
            await Archivos.create({Edad: null, FechaPublicacion: '2021-01-16', Descripcion: null, SexoId: 1, RazaId: 1, UsuarioId: 2, EstadoId: 2, Nombre: null})
        }

        const countRolesUsuario = await Roles_Usuario.count()
        if(!countRolesUsuario) {
            const user = await Roles.findOne({ where: {Nombre: 'User'} })
            const admin = await Roles.findOne({ where: {Nombre: 'Admin'} })
            await Roles_Usuario.create({UsuarioId: 1, RolId: user.dataValues.Id })
            await Roles_Usuario.create({UsuarioId: 2, RolId: user.dataValues.Id })
            await Roles_Usuario.create({UsuarioId: 3, RolId: user.dataValues.Id })
            await Roles_Usuario.create({UsuarioId: 4, RolId: user.dataValues.Id })
            await Roles_Usuario.create({UsuarioId: 5, RolId: admin.dataValues.Id })
            await Roles_Usuario.create({UsuarioId: 6, RolId: admin.dataValues.Id })
        }

        const countImagenes = await ImagenDeFicha.count()
        if(!countImagenes) {
            await ImagenDeFicha.create({Nombre: 'img1', FichaId: 1 })
            await ImagenDeFicha.create({Nombre: 'img2', FichaId: 2 })
            await ImagenDeFicha.create({Nombre: 'img3', FichaId: 3 })
            await ImagenDeFicha.create({Nombre: 'img4', FichaId: 4 })
            await ImagenDeFicha.create({Nombre: 'img5', FichaId: 5 })
            await ImagenDeFicha.create({Nombre: 'img6', FichaId: 6 })
            await ImagenDeFicha.create({Nombre: 'img7', FichaId: 7 })
            await ImagenDeFicha.create({Nombre: 'img8', FichaId: 8 })
        }
    } catch (error) {
        console.log(`\n\tFalló la carga de datos\n`, error.message)
        console.log('Se esta reintentando cargar los datos')
        initTables()
    }

}
