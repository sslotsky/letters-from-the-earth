import { CaptchaError, verify } from 'SERVER/services/captcha';
import { create } from 'SERVER/services/user';
import { ValidationException } from 'SERVER/validation';

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

