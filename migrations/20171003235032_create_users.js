exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table) {
    table.increments();
    table.string("email").notNullable().unique().index();
    table.boolean("confirmed").notNullable().defaultTo(false);
    table.string("password").notNullable();
    table.string("role").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
