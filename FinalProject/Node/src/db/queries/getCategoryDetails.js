// export default `
// SELECT
//     c.name
//     c.description,
//     n.is_exclusive,
//     n.title,
//     n.description,
//     u.name as user
// FROM category c
// INNER JOIN category c on n.category_id = c.id
// INNER JOIN news n on n.user_id = u.id
// GROUP BY n.category_id, n.title, n.description, n.is_exclusive, n.published_date, u.name;
// `;
