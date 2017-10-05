import { eligible } from 'SERVER/services/user';
import { createAccount } from 'SERVER/useCases/identity';

export default function identity(api) {
  api.post('/accounts', (req, res, next) => {
    const { username, password, code } = req.body;

    return createAccount(username, password, code, req.ip).then(
      user => res.json({ user })
    ).catch(next);
  });

  api.post('/eligibility_checks', (req, res) => {
    return eligible(req.body.username).then(eligible => res.json({ eligible }));
  });
}
