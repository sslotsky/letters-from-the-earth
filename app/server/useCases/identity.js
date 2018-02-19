import { CaptchaError, verify } from "SERVER/services/captcha";
import { create, validate } from "SERVER/services/user";
import { ValidationException } from "SERVER/validation";
import { encode, decode } from "SERVER/services/identity";

export class InvalidCredentials {}

export function createAccount(email, password, code, ip) {
  return verify(code, ip)
    .then(() =>
      create({ email, password, role: "customer" }).then(user =>
        encode(user.toJSON())
      )
    )
    .catch(err => {
      if (err instanceof CaptchaError) {
        throw new ValidationException({
          code: "Invalid Captcha Code"
        });
      }

      throw err;
    });
}

export function login(email, password) {
  return validate(email, password).then(user => {
    if (!user) {
      throw new InvalidCredentials();
    }

    return encode(user);
  });
}
