 SELECT * FROM students WHERE first_name = "Mary";

 EXPLAIN QUERY PLAN SELECT * FROM students WHERE first_name = "Mary";

 CREATE INDEX idx_students_first_name ON students(first_name);

 SELECT * FROM students WHERE first_name = "Mary";

 EXPLAIN QUERY PLAN SELECT * FROM students WHERE first_name = "Mary";