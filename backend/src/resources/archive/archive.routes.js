import { Router } from 'express'
import { save, getAll, getById, deleteById, updateById, getByUserId } from './archive.controller'

const router = Router()

router.post('/', save)
router.get('/', getAll)
router.get('/usuarios/:id', getByUserId)
router.get('/:id', getById)
router.delete('/:id', deleteById)
router.put('/:id', updateById)

export default router
