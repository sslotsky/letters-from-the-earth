import bcrypt from 'bcrypt-nodejs';
import User from 'SERVER/models/User';

export function create(data) {
  const { username, password } = data;
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

  return User.forge({ username, password: hashedPassword }).save();
}

export function eligible(username) {
  return User.where({ username }).fetch().then(user => !user);
}

