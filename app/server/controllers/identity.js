import axios from 'axios';

export default function identity(api) {
  api.post('/accounts', (req, res) => {
    axios.post('https://www.google.com/recaptcha/api/siteverify', {
      secret: process.env.CAPTCHA_SECRET,
      response: req.body.code,
      remoteIp: req.ip
    }).then(() => {
      res.status(200).end();
    }).catch((err) => {
      res.status(422).end();
    });
  });
}
