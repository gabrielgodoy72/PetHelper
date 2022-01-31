import Archivos from './archive.model'
import Sexos from '../sex/sex.model'
import Razas from '../race/race.model'
import Especies from '../species/species.model'
import Estados from '../state/state.model'
import Usuarios from '../credentials/user/user.model'
import ImagenDeArchivo from '../archive_img/archive_img.model'

export const save = async(req, res) => {
    const { Nombre, Edad, FechaPublicacion, Descripcion, SexoId, RazaId, UsuarioId, EstadoId, Imagenes } = req.body
    if(isNaN(SexoId)) return res.status(400).json({ message: 'SexoId must be integer' })
    if(isNaN(RazaId)) return res.status(400).json({ message: 'RazaId must be integer' })
    if(isNaN(UsuarioId)) return res.status(400).json({ message: 'UsuarioId must be integer' })
    if(isNaN(EstadoId)) return res.status(400).json({ message: 'EstadoId must be integer' })
    if(FechaPublicacion && SexoId && RazaId && UsuarioId && EstadoId) {
        try {
            const result = await Archivos.create({
                Nombre,
                Edad,
                FechaPublicacion,
                Descripcion,
                SexoId,
                RazaId,
                UsuarioId,
                EstadoId
            })
            if(Array.isArray(Imagenes) && Imagenes.length) {
                const results = await Promise.all(
                    Imagenes.map(async (img) => {
                        const fotoMascota = img.split('.')
                        console.log(img, fotoMascota[0])
                        await ImagenDeArchivo.create({FichaId: result.dataValues.Id, Nombre: fotoMascota[0]})
                    })
                )
            }
            return res.status(201).json(result).end()
        } catch (error) { res.status(400).json({ message: 'file creation failed' }).end() }
    } else { res.status(400).json({ message: 'Required field: Edad, FechaPublicacion, SexoId, RazaId, UsuarioId, EstadoId' }).end() }
}

export const getAll = async(req, res) => {
    const result = await Archivos.findAll({
        attributes: ['Id', 'Nombre', 'FechaPublicacion', 'Edad', 'Descripcion'],
        include: [
            { model: Usuarios,
                attributes: ['Id', 'Nombre']},
            { model: Sexos,
                attributes: ['Nombre'] },
            { model: Estados,
                attributes: ['Nombre'] },
            { model: Razas,
                attributes: ['Nombre'],
                include: [
                    {model: Especies, as: 'Especie', attributes: ['Nombre']} ] }
        ]
    })
    res.status(200).json(result).end()
} 

export const getById = async(req, res) => {
    const id = parseInt(req.params.id)
    if(isNaN(id)) return res.status(400).json({ message: 'Id must be integer type' }).end()
    const result = await Archivos.findOne({ where: {Id: id} })
    result? res.status(200).json(result).end() : res.status(404).json({ message: 'Archive not found' }).end()
}

export const getByUserId = async(req, res) => {
    const id = parseInt(req.params.id)
    if(isNaN(id)) return res.status(400).json({ message: 'Id must be integer type' }).end()
    const result = await Archivos.findAll({ where: {UsuarioId: id} })
    result? res.status(200).json(result).end() : res.status(404).json({ message: 'Archives not found' }).end()
}

export const deleteById = async(req, res) => {
    const id = parseInt(req.params.id)
    if(isNaN(id)) return res.status(400).json({ message: 'Id must be integer type' }).end()
    const result = await Archivos.destroy({ where: {Id: id} })
    result? res.status(200).json({ message: 'Successfully removed' }).end() : res.status(404).end()
}

export const updateById = async(req, res) => {
    const { Edad, FechaPublicacion, Descripcion, SexoId, RazaId, UsuarioId, EstadoId } = req.body
    const id = parseInt(req.params.id)
    if(isNaN(id)) return res.status(400).json({ message: 'Id must be integer type' }).end()
    if(isNaN(EspecieId)) return res.status(400).json({ message: 'Id must be integer type' }).end()
    if(Nombre){
        try {
            await Archivos.update({ Edad, FechaPublicacion, Descripcion, SexoId, RazaId, UsuarioId, EstadoId }, { where: { Id: id } })
        } catch (error) { return res.status(400).json({ message: 'file update failed'}).end() }
    } else { res.status(400).json({ message: 'Required field: Edad, FechaPublicacion, SexoId, RazaId, UsuarioId, EstadoId' }).end() }
}
