import { Router } from 'express'
import { save, getAll, getById, deleteById, updateById } from './role.controller'
import { verifyToken, isAdmin } from '../../../middlewares'

const router = Router()

router.post('/', [verifyToken, isAdmin], save)
router.get('/', [verifyToken, isAdmin], getAll)
router.get('/:id', [verifyToken, isAdmin], getById)
router.delete('/:id', [verifyToken, isAdmin], deleteById)
router.put('/:id', [verifyToken, isAdmin], updateById)

export default router
