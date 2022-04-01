/**
 * Delete existing entries and seed values for `news`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
 export function seed(knex) {
  return knex('news')
    .del()
    .then(() => {
      return knex('news').insert([
        {
          category_id: 1,
          title: 'RRR joins 1 crore box office',
          description: "Alia Bhatt, NTR, Ajay Devgan, Ram Charan",
          is_exclusive: false,
          user_id: 1
        }
      ]);
    });
}