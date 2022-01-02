import jwt from 'jsonwebtoken'
import config from '../settings'
import Usuarios from '../resources/credentials/user/user.model'
import Roles from '../resources/credentials/role/role.model'
import RolesDeUsuario from '../resources/credentials/user_role/user_role.model'

export const existUsers = async(req, res, next) => {
    const userCounter = await Usuarios.count()
    req.noUsers = !userCounter
    next()
}

export const verifyToken = async(req, res, next) => {
    if(!req.noUsers){
        const bearerToken = req.headers.authorization
        !bearerToken && res.status(403).json({ message: 'No bearer token provided' }).end()
        try {
            const decoded = jwt.verify(bearerToken.split(' ')[1], config.secretKey)
            console.log(decoded)
            req.UsuarioId = decoded.Id
            const result = await Usuarios.findOne({ where: {Id: req.UsuarioId}})
            result? next() :  res.status(404).json({ message: 'User not found' }).end()
        } catch (error) { res.status(400).json({ message: 'Invalid token' }).end() }
    } else { next() }
}

export const isAdmin = async (req, res, next) => {
    if(!req.noUsers) {
        const rol = await Roles.findOne({ where: {Nombre: 'Admin'}})
        const userRoleMatch = await RolesDeUsuario.findOne({ where: {UsuarioId: req.UsuarioId, RolId: rol.Id} })
        !userRoleMatch? res.status(401).json({message: " Rol Unauthorided"}).end() : next()
    } else { next() }
} 

export const isModerator = async (req, res, next) => {
    const roles = await Roles.findAll()
    const adminRol = roles.filter(rol => rol.Nombre === 'Admin')
    const adminMatch = await RolesDeUsuario.findOne({ where: {UsuarioId: req.UsuarioId, RolId: adminRol.Id} })
    adminMatch && next()
    const moderatorRol = roles.filter(rol => rol.Nombre === 'Moderator')
    const moderatorMatch = await RolesDeUsuario.findOne({ where: {UsuarioId: req.UsuarioId, RolId: moderatorRol.Id} })
    !moderatorMatch? res.status(401).json({message: 'Rol Unauthorided'}).end() : next()
} 