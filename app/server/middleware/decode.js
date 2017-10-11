import jwt from 'jsonwebtoken'
import { decode as decodeToken } from 'SERVER/services/identity';

export default function decode(req, res, next) {
  const token = req.get('auth-token') || req.cookies['auth-token']
  decodeToken(token).then((decoded) => {
    if (decoded) {
      req.currentUser = decoded;
    } else {
      req.authFailed = true;
    }

    next();
  });
}


