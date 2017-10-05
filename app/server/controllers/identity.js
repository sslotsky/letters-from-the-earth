import { eligible } from 'SERVER/services/user';
import { createAccount, encode } from 'SERVER/useCases/identity';
import writeCookie from 'SERVER/middleware/writeCookie';

export default function identity(api) {
  api.post('/accounts', (req, res, next) => {
    const { username, password, code } = req.body;

    return createAccount(username, password, code, req.ip).then((user) => {
      const encoded = encode(user.toJSON());
      return writeCookie(res, 'auth-token', encoded.token).json({ user: encoded.user })
    }).catch(next);
  });

  api.post('/eligibility_checks', (req, res) => {
    return eligible(req.body.username).then(eligible => res.json({ eligible }));
  });
}
