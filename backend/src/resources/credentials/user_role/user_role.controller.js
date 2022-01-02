import RolesDeUsuario from './user_role.model'

export const save = async(req, res) => {
    const { UsuarioId, RolId } = req.body
    if(UsuarioId && RolId) {
        (isNaN(UsuarioId) || isNaN(RolId)) && res.status(400).json({ message: 'UsuarioId and RolId must be integers' })
        const result = await RolesDeUsuario.create({ UsuarioId, RolId })
        res.status(201).json(result).end()
    } else { res.status(400).json({ message: 'Required fields: UsuarioId, RolId' }).end() }
}

export const getAll = async(req, res) => {
    const result = await RolesDeUsuario.findAll()
    res.status(200).json(result).end()
}

export const getById = async(req, res) => {
    const id = req.params.id
    isNaN(id) && res.status(400).json({ message: 'Id must be integer' }).end()
    const result = await RolesDeUsuario.findOne({ where: {Id: id} })
    result? res.status(200).json(result).end() : res.status(404).json({ message: 'UserRole not found' }).end()
}

export const deleteById = async(req, res) => {
    const id = req.params.id
    isNaN(id) && res.status(400).json({ message: 'Id must be integer' }).end()
    const result = await RolesDeUsuario.destroy({ where: {Id: id} })
    result? res.status(200).json({ message: 'Successfully removed' }).end() : res.status(404).end()
}

export const updateById = async(req, res) => { 
    const { UsuarioId, RolId } = req.body
    const id = req.params.id
    isNaN(id) && res.status(400).json({ message: 'Id must be integer' }).end()
    (UsuarioId && isNaN(UsuarioId)) && res.status(400).json({ message: 'UsuarioId must be integer' }).end()
    (RolId && isNaN(RolId)) && res.status(400).json({ message: 'RolId must be integer' }).end()
    (!UsuarioId && !RolId) && res.status(400).json({ message: 'Required fields: UsuarioId and/or RoleId' })
    const previousResult = await RolesDeUsuario.findOne({ where: {Id: id} })
    if(previousResult){
        await RolesDeUsuario.update(
            {
                UsuarioId: UsuarioId || previousResult.dataValues.UsuarioId,
                RolId: RolId || previousResult.dataValues.RolId
            }, { where: {Id: id} }
        )
        res.status(200).json({ message: 'Successfully updated' }).end()
    } else { res.status(404).json({ message: 'UserRole not found' }) }
}
