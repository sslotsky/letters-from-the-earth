import jwt from "jsonwebtoken";
import crypto from "crypto-random-string";
import secret from "SERVER/secret";
import { ValidationException } from "SERVER/validation";
import {
  EmailConfirmationTokens,
  EmailConfirmationToken
} from "SERVER/models/EmailConfirmationToken";
import User from "SERVER/models/User";

export async function confirmationToken(userId) {
  await EmailConfirmationTokens.query().where({ user_id: userId }).del();

  const token = await EmailConfirmationToken.forge({
    user_id: userId,
    token: crypto(16)
  }).save();

  console.log("created", token.toJSON());
  return token.toJSON();
}

export async function confirm(token) {
  const emailToken = await EmailConfirmationToken.where({ token }).fetch();

  if (emailToken) {
    const user = await User.where({
      id: emailToken.attributes.user_id
    }).fetch();

    user.save({ confirmed: true });
    emailToken.destroy();
  } else {
    throw new ValidationException({ token: "Invalid token" });
  }
}

export function encode(user) {
  const { password: _, ...rest } = user;
  return {
    token: jwt.sign(rest, secret, { expiresIn: "24h" }),
    user: rest
  };
}

export function decode(token) {
  return new Promise(resolve => {
    if (token) {
      jwt.verify(token, secret, (err, decoded) => {
        resolve(!err && decoded);
      });
    }

    resolve();
  });
}

export function createAccount(email, password, code, ip) {
  return verify(code, ip)
    .then(() => create({ email, password }).then(user => encode(user.toJSON())))
    .catch(err => {
      if (err instanceof CaptchaError) {
        throw new ValidationException({
          code: "Invalid Captcha Code"
        });
      }

      throw err;
    });
}
