import { eligible } from 'SERVER/services/user';
import { createAccount, login } from 'SERVER/useCases/identity';
import { writeCookie, clearCookie } from 'SERVER/middleware';

export default function identity(api) {
  api.post('/accounts', (req, res, next) => {
    const { username, password, code } = req.body;

    return createAccount(username, password, code, req.ip).then(encoded =>
      writeCookie(res, 'auth-token', encoded.token).json({ user: encoded.user })
    ).catch(next);
  });

  api.post('/session', (req, res, next) => {
    const { username, password } = req.body;

    return login(username, password).then(encoded =>
      writeCookie(res, 'auth-token', encoded.token).json({ user: encoded.user })
    ).catch(next);
  });

  api.delete('/session', (req, res, next) => {
    return clearCookie(res, 'auth-token').status(200).end();
  });

  api.post('/eligibility_checks', (req, res) => {
    return eligible(req.body.username).then(eligible => res.json({ eligible }));
  });
}
