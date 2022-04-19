/**
 * Create category table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('category', (table) => {
    table.increments('id').primary().unsigned();
    table.string('name', 50).notNull();
    table.string('description', 100);
  });
}

/**
 * Drop table_name cars
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('category');
}
