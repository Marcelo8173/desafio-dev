import express from 'express'
import {routes} from './routes'
import cors from 'cors'
import swagger from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import "reflect-metadata"
import './database/index'


const app = express()

app.use(cors());

app.use(express.json())

app.use('/api-docs/', swagger.serve, swagger.setup(swaggerFile))

app.use(routes)

app.listen(8080, () => {
    console.log("api online em 8080")
})