import { Sequelize, DataTypes } from "sequelize"
import environment from '../settings'

export const sequelize = new Sequelize(
    environment.dbDatabase, 
    environment.dbUser, 
    environment.dbPassword, 
    {
        dialect: 'mssql',
        port: environment.dbPort,
        hots: environment.dbServer,
        // logging: false
    }
)

export { DataTypes };


