import ImagenesDeFicha from './archive_img.model'

export const save = async(req, res) => {
    const { Nombre, FichaId } = req.body
    if(isNaN(FichaId)) return res.status(400).json({ message: 'FichaId must be integer' })
    if(Nombre) {
        try {
            const result = await ImagenesDeFicha.create({Nombre, FichaId})
            return res.status(201).json(result).end()
        } catch (error) { res.status(400).json({ message: 'The img already exists' }).end() }
    } else { res.status(400).json({ message: 'Required field: Nombre' }).end() }
}

export const getAll = async(req, res) => {
    const result = await ImagenesDeFicha.findAll()
    res.status(200).json(result).end()
}

export const getById = async(req, res) => {
    const id = parseInt(req.params.id)
    if(isNaN(id)) return res.status(400).json({ message: 'Id must be integer type' }).end()
    const result = await ImagenesDeFicha.findOne({ where: {Id: id} })
    result? res.status(200).json(result).end() : res.status(404).json({ message: 'not found' }).end()
}

export const deleteById = async(req, res) => {
    const id = parseInt(req.params.id)
    if(isNaN(id)) return res.status(400).json({ message: 'Id must be integer type' }).end()
    const result = await ImagenesDeFicha.destroy({ where: {Id: id} })
    result? res.status(200).json({ message: 'Successfully removed' }).end() : res.status(404).end()
}

export const updateById = async(req, res) => {
    const { Nombre, FichaId } = req.body
    const id = parseInt(req.params.id)
    if(isNaN(id)) return res.status(400).json({ message: 'Id must be integer type' }).end()
    if(isNaN(FichaId)) return res.status(400).json({ message: 'Id must be integer type' }).end()
    if(Nombre){
        try {
            await ImagenesDeFicha.update({ Nombre, FichaId }, { where: { Id: id } })
        } catch (error) { return res.status(400).json({ message: 'The name already exists'}).end() }
    } else { res.status(400).json({ message: 'Required field: Nombre' }).end() }
}
