import express from 'express'
import morgan from 'morgan'
import render from './serverRender'

const app = express()
app.use(morgan('dev'))

app.use('/assets', express.static('assets'))

app.use(render)

app.listen(9999)


