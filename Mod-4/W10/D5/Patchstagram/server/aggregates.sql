
-- SELECT posts.title as post_title,
--     users.username as author,
--     COUNT() as post_likes
-- FROM users
--     JOIN likes ON (users.id = likes.user_id)
--     JOIN posts ON (likes.post_id = posts.id)
-- WHERE posts.id = 5;

-- SELECT title, MIN(post_date) FROM posts;

-- SELECT title, MAX(post_date) FROM posts;

-- SELECT name, 2024 - age as birth_year FROM users;

-- SELECT SUM(age) FROM users;

-- SELECT DISTINCT breed FROM users;


-- SELECT age, COUNT() FROM users
-- GROUP BY age;

-- SELECT post_id, COUNT() as num_cooments FROM comments
-- GROUP BY post_id
-- HAVING user_id = 2;

SELECT users.username, COUNT() as num_posts
FROM users
    JOIN posts ON (users.id = posts.user_id)
    GROUP BY users.username
    ORDER BY users.username DESC
    LIMIT 1;


