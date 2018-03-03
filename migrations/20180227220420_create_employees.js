exports.up = function(knex, Promise) {
  return knex.schema.createTable("employees", function(table) {
    table.increments();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.integer("user_id").unsigned().unique().index();
    table.foreign("user_id").references("users.id");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("employees");
};
