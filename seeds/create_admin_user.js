import { create } from "SERVER/services/user";

export const seed = knex =>
  knex("users").del().then(() =>
    create({
      email: "admin@example.com",
      password: "please",
      role: "admin"
    })
  );
