import Estados from './state.model'

export const save = async(req, res) => {
    const Nombre = req.body.Nombre
    if(Nombre) {
        try {
            const result = await Estados.create({Nombre})
            return res.status(201).json(result).end()
        } catch (error) { res.status(400).json({ message: 'The state already exists' }).end() }
    } else { res.status(400).json({ message: 'Required field: Nombre' }).end() }
}

export const getAll = async(req, res) => {
    const result = await Estados.findAll()
    res.status(200).json(result).end()
}

export const getById = async(req, res) => {
    const id = parseInt(req.params.id)
    if(isNaN(id)) return res.status(400).json({ message: 'Id must be integer type' }).end()
    const result = await Estados.findOne({ where: {Id: id} })
    result? res.status(200).json(result).end() : res.status(404).json({ message: 'State not found' }).end()
}

export const deleteById = async(req, res) => {
    const id = parseInt(req.params.id)
    if(isNaN(id)) return res.status(400).json({ message: 'Id muest be integer type' }).end()
    const result = await Estados.destroy({ where: {Id: id} })
    result? res.status(200).json({ message: 'Successfully removed' }).end() : res.status(404).end()
}

export const updateById = async(req, res) => {
    const Nombre = req.body.Nombre
    const id = parseInt(req.params.id)
    if(isNaN(id)) return res.status(400).json({ message: 'Id must be integer type' }).end()
    if(Nombre){
        try {
            await Estados.update({ Nombre }, { where: { Id: id } })
        } catch (error) { return res.status(400).json({ message: 'The name already exists'}).end() }
    } else { res.status(400).json({ message: 'Required field: Nombre' }).end() }
}
