import { CaptchaError, verify } from "SERVER/services/captcha";
import { create, validate } from "SERVER/services/user";
import { ValidationException } from "SERVER/validation";
import {
  encode,
  decode,
  confirm,
  confirmationToken
} from "SERVER/services/identity";

export class InvalidCredentials {}

export function confirmAccount(token) {
  return confirm(token);
}

export async function createAccount(email, password, code, ip) {
  try {
    await verify(code, ip);

    const user = await create({ email, password, role: "customer" });
    const { token } = await confirmationToken(user.id);

    return { user, token };
  } catch (err) {
    if (err instanceof CaptchaError) {
      throw new ValidationException({
        code: "Invalid Captcha Code"
      });
    }
    throw err;
  }
  return verify(code, ip)
    .then(() =>
      create({ email, password, role: "customer" }).then(user => {
        return user.toJSON();
      })
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
