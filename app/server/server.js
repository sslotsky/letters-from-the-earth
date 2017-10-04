import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser';
import render from './serverRender'
import identity from 'SERVER/controllers/identity';

const app = express()
app.enable('trust proxy');

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

if (process.env.NODE_ENV !== 'production') {
  app.use(cors({ origin: 'http://localhost:3002', credentials: true }))
}

app.use('/dist', express.static('dist'));

const api = express.Router();

app.use('/v1', api);

identity(api);

app.use(render)

app.listen(process.env.PORT || 9999);
