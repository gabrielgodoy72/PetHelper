import { Router } from 'express'
import { save, getAll, getById, deleteById, updateById } from './species.controller'

const router = Router()

router.post('/', save)
router.get('/', getAll)
router.get('/:id', getById)
router.delete('/:id', deleteById)
router.put('/:id', updateById)

export default router
