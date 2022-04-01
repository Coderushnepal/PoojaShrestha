/**
 * Create table_name table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
  return knex.schema.createTable('news', (table) => {
  table.increments('id').primary().unsigned();
  table.integer('category_id').references('id').inTable('category').notNull();
  table.string('title', 500).notNull();
  table.string('description', 1000).notNull();
  table.boolean('is_exclusive').default(true).notNull();
  table.timestamp('published_date').default(knex.fn.now()).notNull();
  table.integer('user_id').references('id').inTable('users').notNull();
  });
}

/**
 * Drop table_name cars
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('news');
}