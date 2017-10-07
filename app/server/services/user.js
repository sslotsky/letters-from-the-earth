import bcrypt from 'bcrypt-nodejs';
import User from 'SERVER/models/User';

export function create(data) {
  const { username, password } = data;
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

  return User.forge({ username, password: hashedPassword }).save();
}

export function find(username) {
  return User.where({ username }).fetch();
}

export function eligible(username) {
  return find(username).then(user => !user);
}

export function validate(username, password) {
  return find(username).then((user) => {
    if (user) {
      const serialized = user.toJSON();

      if (bcrypt.compareSync(password, serialized.password)) {
        return serialized;
      }
    }

    return null;
  });
}
