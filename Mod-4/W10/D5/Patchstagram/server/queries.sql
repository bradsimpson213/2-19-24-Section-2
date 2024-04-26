-- SELECT * FROM users;

-- SELECT * FROM users WHERE age=12 OR name = 'Mimi';

-- SELECT name, username, age FROM users WHERE age=12 OR name = 'Mimi';


-- SELECT * FROM users WHERE id = 1;

-- DELETE COMMANDS
DELETE FROM puppies;
DELETE FROM puppies WHERE id = 1;
DELETE FROM puppies WHERE id = 2 OR id = 3;
DELETE FROM puppies WHERE name = 'Charley' AND breed = "basset Hound";
DELETE FROM puppies WHERE microchipped = 0;


-- UPDATE COMMANDS
UPDATE puppies SET microchipped = 0;
UPDATE puppies SET age_yrs = 1 WHERE age_yrs < 1;
UPDATE puppies SET breed = "GOAT" WHERE id = 8;
