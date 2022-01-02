import { Router } from 'express'
import { save, getAll, getById, deleteById, updateById } from './user.controller'
import { existUsers, verifyToken, isAdmin } from '../../../middlewares'

const router = Router()
/** si no existen usuarios no se chequea autenticación ni autorización, se le asigna rol 'admin' al primer usuario creado **/
router.post('/', [existUsers, verifyToken, isAdmin], save)  
router.get('/', [verifyToken, isAdmin], getAll)
router.get('/:id', [verifyToken, isAdmin], getById)
router.delete('/:id', [verifyToken, isAdmin], deleteById)
router.put('/:id', [verifyToken, isAdmin], updateById)

export default router
