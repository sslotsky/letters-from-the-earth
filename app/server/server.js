import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser';
import env from 'dotenv';
import render from './serverRender'
import identity from 'SERVER/controllers/identity';
import { InvalidCredentials } from 'SERVER/useCases/identity';
import { ValidationException } from './validation';

env.config();

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

api.use((err, _, res, next) => {
  if (err instanceof ValidationException) {
    res.status(422).json({ errors: err.errors })
  } else if (err instanceof InvalidCredentials) {
    res.status(422).json({ code: 'invalid_credentials' })
  } else {
    next(err)
  }
})

api.use((req, res, next) => res.status(404).end());

app.use(render)

app.listen(process.env.PORT || 9999);
