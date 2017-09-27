import express from 'express'
import morgan from 'morgan'
import render from './serverRender'

const app = express()
app.use(morgan('dev'))

app.use('/dist', express.static('dist'));

app.use(render)

app.listen(process.env.PORT || 9999);
