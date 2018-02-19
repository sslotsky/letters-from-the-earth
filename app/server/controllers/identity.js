import { eligible } from "SERVER/services/user";
import { createAccount, login } from "SERVER/useCases/identity";
import { writeCookie, clearCookie } from "SERVER/middleware";

export default function identity(api) {
  api.post("/accounts", (req, res, next) => {
    const { email, password, code } = req.body;

    return createAccount(email, password, code, req.ip)
      .then(encoded =>
        writeCookie(res, "auth-token", encoded.token).json({
          user: encoded.user
        })
      )
      .catch(next);
  });

  api.post("/session", (req, res, next) => {
    const { email, password } = req.body;

    return login(email, password)
      .then(encoded =>
        writeCookie(res, "auth-token", encoded.token).json({
          user: encoded.user
        })
      )
      .catch(next);
  });

  api.delete("/session", (req, res, next) => {
    return clearCookie(res, "auth-token").status(200).end();
  });

  api.post("/eligibility_checks", (req, res) => {
    return eligible(req.body.email).then(eligible => res.json({ eligible }));
  });
}
