import express from 'express'
import {routes} from './routes'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(8080, () => {
    console.log("api online em 8080")
})