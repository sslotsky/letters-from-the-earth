export default function writeCookie(res, name, val, httpOnly = true) {
  res.cookie(name, val, { httpOnly });
  return res;
}
