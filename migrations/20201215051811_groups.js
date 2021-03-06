exports.up = function (knex) {
  return knex.schema.createTable("groups", function (table) {
    table.increments("group_id").primary().unique();
    table.string("group_name").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.string("status");
  });
};

exports.down = function (knex) {
  return knex.schema.hasTable("groups").then(function (exists) {
    if (exists) {
      return knex.schema.dropTable("groups");
    }
  });
};
