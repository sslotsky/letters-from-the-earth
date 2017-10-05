import jwt from 'jsonwebtoken'
import { CaptchaError, verify } from 'SERVER/services/captcha';
import { create } from 'SERVER/services/user';
import { ValidationException } from 'SERVER/validation';
import secret from 'SERVER/secret';

export function createAccount(username, password, code, ip) {
  return verify(code, ip).then(() =>
    create({ username, password })
  ).catch((err) => {
    if (err instanceof CaptchaError) {
      throw new ValidationException({
        code: 'Invalid Captcha Code'
      })
    }

    throw err
  })
}

export function encode(user) {
  const { password: _, ...rest } = user
  return {
    token: jwt.sign(rest, secret, { expiresIn: '24h' }),
    user: rest
  }
}
