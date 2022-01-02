import jwt from "jsonwebtoken"
import { encryptPassword, comparePassword } from '../../utils'
import _Usuarios from '../credentials/user/user.model'
import _Roles from '../credentials/role/role.model'
import _RolesDeUsuario from '../credentials/user_role/user_role.model'
import config from '../../settings'

export const singup = async (req, res) => { 
    const respuesta = {}
    const { Email, Password, Nombre, Telefono, Direccion } = req.body
    if(!Email) return res.status(400).json({ message: 'Email is a required field'} ).end()
    if(!Password) return res.status(400).json({ message: 'Password is a required field'} ).end()
    if(!Nombre) return res.status(400).json({ message: 'Nombre is a required field'} ).end()
    if(!Telefono) return res.status(400).json({ message: 'Telefono is a required field'} ).end()
    if(!Direccion) return res.status(400).json({ message: 'Direccion is a required field'} ).end()
    const PasswordHash = await encryptPassword(Password)
    const existAdmin = await _Usuarios.count()
    const rol = existAdmin? await _Roles.findOne({ where: {Nombre: 'User'}}) : await _Roles.findOne({ where: {Nombre: 'Admin'}})
    try {
        const usuario = await _Usuarios.create({ Email, PasswordHash, Nombre, Telefono, Direccion })
        delete usuario.dataValues.PasswordHash
        respuesta.Usuario = usuario.dataValues
    } catch (error) { return res.status(400).json({ message: 'The email already exists' }).end() }
    await _RolesDeUsuario.create({UsuarioId: respuesta.Usuario.Id, RolId: rol.Id})
    respuesta.Rol = rol.Nombre
    respuesta.accessToken = jwt.sign({Id: respuesta.Usuario.Id}, config.secretKey, {expiresIn: 86400})
    res.status(201).json(respuesta).end()
}

export const singin = async (req, res) => {
    const respuesta = {}
    const { Email, Password } = req.body
    if(!Email && !Password) return res.status(400).json({ message: 'Required fields: Email, Password' }).end()
    const usuario = await _Usuarios.findOne({ where: {Email: Email} })
    if(!usuario) return res.status(404).json({ message: 'User not found' }).end()
    const matchPassword = await comparePassword(Password, usuario.PasswordHash)
    if(!matchPassword) return res.status(400).json({ message: 'Incorrect password' }).end()
    delete usuario.dataValues.PasswordHash
    respuesta.Usuario = usuario.dataValues
    respuesta.accessToken = jwt.sign({Id: respuesta.Usuario.Id}, config.secretKey, {expiresIn: 86400})
    res.status(200).json(respuesta).end()
}
