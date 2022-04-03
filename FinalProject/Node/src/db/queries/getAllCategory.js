// export default `
// SELECT
//     c.name
//     c.description,
//     n.is_exclusive,
//     n.published_date,
//     u.name as user
// FROM category c
// INNER JOIN category c on n.category_id = c.id
// LEFT JOIN news n on n.user_id = u.id
// GROUP BY n.category_id, n.title, n.description, n.is_exclusive, n.published_date, u.name;
// `;
