
exports.up = function(knex, Promise) {
  return knex.schema.createTable('letter_details', function (table) {
    table.increments();
    table.integer('letter_request_id').unsigned();
    table.foreign('letter_request_id').references('letter_requests.id');
    table.string('detailable_type').notNullable();
    table.integer('detailable_id').unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('letter_details');
};
