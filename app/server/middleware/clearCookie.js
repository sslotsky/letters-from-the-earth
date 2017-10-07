export default function clearCookie(res, name) {
  res.clearCookie(name);
  return res;
}

