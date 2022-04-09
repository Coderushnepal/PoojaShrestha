export default `
SELECT
*
FROM
news n
INNER JOIN category c on c.id = n.category_id
WHERE n.category_id = :categoryId;

;
`;

// c.name,
//     c.description,
//     n.title,
//     n.description,
//     n.published_date
// FROM category c
// INNER JOIN news n on n.category_id = c.id
// WHERE c.id = :categoryId
// GROUP BY c.name, c.description, n.title, n.description,n.published_date, n.user_id;


// c.name,
// ARRAY_AGG (n) news
// FROM
// category c
// INNER JOIN news n on n.category_id = c.id
// GROUP BY
// c.name