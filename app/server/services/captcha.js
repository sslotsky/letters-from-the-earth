import axios from 'axios';
import querystring from 'querystring';

export class CaptchaError {
  constructor(error) {
    this.error = error;
  }
}

export function verify(code, ip) {
  return axios.post('https://www.google.com/recaptcha/api/siteverify', querystring.stringify({
    secret: process.env.CAPTCHA_SECRET,
    response: code,
    remoteIp: ip
  })).then((resp) => {
    if (!resp.data.success) {
      throw new CaptchaError(resp.data);
    }
  });
}

