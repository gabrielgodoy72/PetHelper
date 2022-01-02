import { Router } from 'express'
import { singin, singup } from './auth.controller'

const router = Router()

router.post('/singin', singin)  //el primer usuario  creado tendra rol 'admin', los siguientes rol 'user'
router.post('/singup', singup)

export default router
