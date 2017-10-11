import { create } from 'SERVER/services/user';

export const seed = knex => knex('users').del()
  .then(() => create({
    username: 'admin',
    password: 'please',
    role: 'admin'
  }));
