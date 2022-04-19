export default `
SELECT
    n.id,
    n.category_id,
    c.name as category,
    n.title,
    n.description,
    n.is_exclusive,
    n.published_date,
    u.name as user
FROM news n
INNER JOIN category c on n.category_id = c.id
LEFT JOIN users u on n.user_id = u.id
GROUP BY n.id, n.category_id, c.name, n.title, n.description, n.is_exclusive, n.published_date, u.name
ORDER BY n.id desc;
`;
