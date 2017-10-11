export default function authenticate(req, res, next) {
  if (req.authFailed) {
    return res.status(403).json({ code: 'auth_failure' });
  }

  next()
}
