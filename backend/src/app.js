import express from 'express'
import environment from './settings'
import helmet from 'helmet'
import cors from 'cors'

import authRoutes from './resources/auth/auth.routes'
import userRoutes from './resources/credentials/user/user.routes'
import roleRoutes from './resources/credentials/role/role.routes'
import userRoleRoutes from './resources/credentials/user_role/user_role.routes'
import stateRoutes from './resources/state/state.routes'
import speciesRoutes from './resources/species/species.routes'
import sexRoutes from './resources/sex/sex.routes'
import raceRoutes from './resources/race/race.routes'
import archiveRoutes from './resources/archive/archive.routes'

import { createTables, initTables } from './utils'

const app = express()

//settings
app.set('port', environment.port)
createTables()
initTables()

//middlewares
app.use(express.json())
app.use(express.urlencoded( {extended:false }))
app.use(helmet())
app.use(cors())

//routes
app.use('/auth', authRoutes)
app.use('/api/usuarios', userRoutes)
app.use('/api/roles', roleRoutes)
app.use('/api/usuario/roles', userRoleRoutes)
app.use('/api/estados', stateRoutes)
app.use('/api/especies', speciesRoutes)
app.use('/api/sexos', sexRoutes)
app.use('/api/razas', raceRoutes)
app.use('/api/archivos', archiveRoutes)

export default app
 