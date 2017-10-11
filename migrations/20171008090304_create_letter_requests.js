
exports.up = function(knex, Promise) {
  return knex.schema.createTable('letter_requests', function (table) {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id');
    table.string('status').notNullable();
    table.string('purpose').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('letter_requests');
};
