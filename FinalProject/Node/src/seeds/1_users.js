/**
 * Delete existing entries and seed values for `users`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
 export function seed(knex) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          name: 'pooja',
          password: 'postgres',
          email: 'pooja@abc.com',
          is_admin: true,
        },
        {
          name: 'pushpa',
          password: 'postgres',
          email: 'pushpa@abc.com',
          is_admin: false,
        }
      ]);
    });
}