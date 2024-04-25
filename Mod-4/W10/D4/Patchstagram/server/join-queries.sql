-- SELECT posts.title, posts.post_date, users.username AS author, users.age
-- FROM posts
--     JOIN users ON (users.id = posts.user_id)
--     WHERE age < 10;


-- SELECT posts.title, users.username AS author, comments.comment_text
-- FROM posts
--     JOIN users ON (users.id = posts.user_id)
--     JOIN comments ON (posts.id = comments.post_id);


SELECT users.username, posts.title
FROM users
    JOIN likes ON (users.id = likes.user_id)
    JOIN posts ON (likes.post_id = posts.id)
    WHERE posts.id = 1;