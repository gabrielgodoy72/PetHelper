import { encryptPassword } from '../../../utils'
import Usuarios from './user.model'
import RolesDeUsuario from '../user_role/user_role.model'
import Roles from '../role/role.model'

export const save = async (req, res) => { 
    const { Email, Password, Nombre, Telefono, Direccion } = req.body
    if (Email && Password && Nombre && Telefono && Direccion) {
        const PasswordHash = await encryptPassword(Password)
        try {
            const result = await Usuarios.create({ Email, PasswordHash, Nombre, Telefono, Direccion }) 
            delete result.dataValues.PasswordHash
            if(req.noUsers) {
                const rol = await Roles.findOne({ where: {Nombre: 'Admin'} })
                await RolesDeUsuario.create({UsuarioId: result.dataValues.Id, RolId: rol.Id})
            }
            res.status(201).json(result).end()
        } catch (error) { res.status(400).json({ message: 'The email already exists' }).end() }
    } else { res.status(400).json({ message: 'Required fields: Email, Password, Nombre, Telefono, Direccion'} ).end() }
}

export const getAll = async (req, res) => {
    const result = await Usuarios.findAll({ attributes: ['Id', 'Email', 'Nombre', 'Telefono', 'Direccion'] })
    res.status(200).json(result).end()
}

export const getById = async (req, res) => {
    const id = parseInt(req.params.id, 10)
    isNaN(id) && res.status(400).json({ message: 'Id must be integer type'}).end()
    const result = await Usuarios.findOne({ attributes: ['Id', 'Email', 'Nombre', 'Telefono', 'Direccion'], where: { Id: id } })
    result? res.status(200).json(result).end() : res.status(404).json({ message: 'User not found'}).end()
}

export const deleteById = async (req, res) => {
    const id = parseInt(req.params.id, 10)
    isNaN(id) && res.status(400).json({ message: 'Id must be integer type'}).end()
    const result = await Usuarios.destroy({ where: { Id: id } })
    result? res.status(200).json({ message: 'Successfully removed' }).end() : res.status(404).end()
}

export const updateById = async (req, res) => { 
    const { Email, Nombre, Telefono, Direccion } = req.body
    const id = parseInt(req.params.id, 10)
    isNaN(id) && res.status(400).json({ message: 'Id must be integer type'}).end()
    const previousResult = await Usuarios.findOne({ where: { Id: id } })
    if(previousResult) {
        try {
            await Usuarios.update(
                {
                    Email: Email || previousResult.dataValues.Email,
                    Nombre: Nombre || previousResult.dataValues.Nombre,
                    Telefono: Telefono || repreviousResultsult.dataValues.Telefono,
                    Direccion: Direccion || previousResult.dataValues.Direccion
                }, { where: { Id: id } })
        } catch (error) { res.status(400).json({ message: 'The email already exists'}).end() }
        res.status(200).json({ message: 'Successfully updated' }).end()
    } else { res.status(404).json({ message: 'User not found' }).end() }
}
