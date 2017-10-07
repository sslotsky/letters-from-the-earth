export function login(user) {
  window.localStorage.setItem('user', JSON.stringify(user));
  return user;
}

export function logout() {
  window.localStorage.removeItem('user');
}

export function user() {
  return JSON.parse(window.localStorage.getItem('user'));
}
