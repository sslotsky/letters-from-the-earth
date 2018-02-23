import { eligible } from "SERVER/services/user";
import { createAccount, confirmAccount, login } from "SERVER/useCases/identity";
import { writeCookie, clearCookie } from "SERVER/middleware";
import { confirmationEmail } from "SERVER/services/email";

export default function identity(api) {
  api.post("/accounts", async (req, res, next) => {
    const { email, password, code } = req.body;

    const { user, token } = await createAccount(email, password, code, req.ip);
    const url = `${req.protocol}://${req.get("host")}/confirm/${token}`;
    confirmationEmail(url, email);

    res.json({ user });
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

  api.post("/confirmations", (req, res, next) => {
    return confirmAccount(req.body.token)
      .then(token => res.json({ token }))
      .catch(next);
  });
}
