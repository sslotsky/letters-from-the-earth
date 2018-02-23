exports.up = function(knex, Promise) {
  return knex.schema.createTable("email_confirmation_tokens", function(table) {
    table.increments();
    table.integer("user_id").unsigned().unique().index();
    table.foreign("user_id").references("users.id");
    table.string("token").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("email_confirmation_tokens");
};
