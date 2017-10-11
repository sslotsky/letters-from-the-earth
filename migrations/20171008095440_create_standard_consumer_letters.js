
exports.up = function(knex, Promise) {
  return knex.schema.createTable('standard_consumer_letters', function (table) {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('address').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('zip').notNullable();
    table.string('business_name').notNullable();
    table.string('individual_name');
    table.string('account_number');
    table.string('business_address').notNullable();
    table.string('business_city').notNullable();
    table.string('business_state').notNullable();
    table.string('business_zip').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('standard_consumer_letters');
};
