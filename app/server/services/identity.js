import jwt from 'jsonwebtoken'
import secret from 'SERVER/secret';

export function encode(user) {
  const { password: _, ...rest } = user
  return {
    token: jwt.sign(rest, secret, { expiresIn: '24h' }),
    user: rest
  }
}

export function decode(token) {
  return new Promise((resolve) => {
    if (token) {
      jwt.verify(token, secret, (err, decoded) => {
        resolve(!err && decoded);
      })
    }

    resolve();
  });
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

