import bcrypt from "bcrypt-nodejs";
import User from "SERVER/models/User";

export function create(data) {
  const { email, password, role } = data;
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  return User.forge({ email, role, password: hashedPassword }).save();
}

export function find(email) {
  return User.where({ email }).fetch();
}

export function eligible(email) {
  return find(email).then(user => !user);
}

export function validate(email, password) {
  debugger;
  return find(email).then(user => {
    if (user) {
      const serialized = user.toJSON();

      if (bcrypt.compareSync(password, serialized.password)) {
        return serialized;
      }
    }

    return null;
  });
}
