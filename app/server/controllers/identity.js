import axios from 'axios';
import User from 'SERVER/models/User';
var bcrypt = require('bcrypt-nodejs');

export default function identity(api) {
  api.post('/accounts', (req, res) => {
    axios.post('https://www.google.com/recaptcha/api/siteverify', {
      secret: process.env.CAPTCHA_SECRET,
      response: req.body.code,
      remoteIp: req.ip
    }).then(() => {
      const { username, password } = req.body;
      const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

      User.forge({ username, password: hashedPassword }).save().then(
        user => res.json({ user })
      )
    }).catch((err) => {
      res.status(422).end();
    });
  });
}
