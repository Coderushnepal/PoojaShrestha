export default `
SELECT
    c.name,
    c.description,
    n.title,
    n.description,
    n.published_date
FROM category c
INNER JOIN news n on n.category_id = c.id
WHERE c.id = :categoryId
GROUP BY c.name, c.description, n.title, n.description,n.published_date, n.user_id;
`;
