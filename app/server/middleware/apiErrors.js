import { NotFound } from 'SERVER/errors';
import { InvalidCredentials } from 'SERVER/useCases/identity';
import { ValidationException } from 'SERVER/validation';

export default function apiErrors(err, _, res, next) {
  if (err instanceof ValidationException) {
    res.status(422).json({ errors: err.errors })
  } else if (err instanceof InvalidCredentials) {
    res.status(422).json({ code: 'invalid_credentials' })
  } else if (err instanceof NotFound) {
    res.status(404).end()
  } else {
    next(err)
  }
}

