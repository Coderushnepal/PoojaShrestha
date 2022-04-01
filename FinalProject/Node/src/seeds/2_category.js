/**
 * Delete existing entries and seed values for `category`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
 export function seed(knex) {
  return knex('category')
    .del()
    .then(() => {
      return knex('category').insert([
        {
          name: 'Entertainment',
        },
        {
          name: 'Sports',
        }
      ]);
    });
}