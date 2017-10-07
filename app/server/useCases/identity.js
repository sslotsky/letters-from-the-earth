import jwt from 'jsonwebtoken'
import { CaptchaError, verify } from 'SERVER/services/captcha';
import { create, validate } from 'SERVER/services/user';
import { ValidationException } from 'SERVER/validation';
import secret from 'SERVER/secret';

export class InvalidCredentials { }

export function encode(user) {
  const { password: _, ...rest } = user
  return {
    token: jwt.sign(rest, secret, { expiresIn: '24h' }),
    user: rest
  }
}

export function createAccount(username, password, code, ip) {
  return verify(code, ip).then(() =>
    create({ username, password }).then(user => encode(user.toJSON()))
  ).catch((err) => {
    if (err instanceof CaptchaError) {
      throw new ValidationException({
        code: 'Invalid Captcha Code'
      })
    }

    throw err
  })
}

export function login(username, password) {
  return validate(username, password).then((user) => {
    if (!user) {
      throw new InvalidCredentials();
    }

    return encode(user);
  });
}

