/**
 * Create table_name table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary().unsigned();
    table.string('name', 50).notNull();
    table.string('password', 200).notNull();
    table.string('email', 100).unique().notNull();
    table.boolean('is_admin').default(false);
  });
}

/**
 * Drop table_name cars
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('users');
}
