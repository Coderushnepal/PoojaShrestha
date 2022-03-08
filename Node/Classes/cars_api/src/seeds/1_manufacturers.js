/**
 * Delete existing entries and seed values for `manufacturers`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('manufacturers')
    .del()
    .then(() => {
      return knex('manufacturers').insert([
        {
          name: 'Hyundai',
          description: 'This is a Hyundai company.'
        },
        {
          name: 'Suzuki',
          description: 'This is a Suzuki company.'
        },
        {
          name: 'Tata',
          description: 'This is a Tata company.'
        }
      ]);
    });
}