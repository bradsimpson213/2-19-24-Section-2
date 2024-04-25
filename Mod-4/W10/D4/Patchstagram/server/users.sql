PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;


CREATE TABLE users(
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name VARCHAR(50) NOT NULL,
   username VARCHAR(100) NOT NULL UNIQUE,
   profile VARCHAR(250),
   age INTEGER,
   fav_toy VARCHAR(50) DEFAULT "mouse" 
);


CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(50) NOT NULL,
    image VARCHAR(250),
    post_date TEXT,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL
);


CREATE TABLE comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    comment_text VARCHAR(150) NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    post_id INTEGER REFERENCES posts(id) ON DELETE SET NULL  
);


CREATE TABLE likes (
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE
);


INSERT INTO users (name, username, profile, age, fav_toy)
VALUES
   ('Patch', 'Patchenator', 'https://res.cloudinary.com/app-academy4/image/upload/v1647912068/Patchstagram/IMG_3393_pdrjbg.jpg', 8, 'plush avocado'),
   ('Blue', 'Blueberry', 'https://res.cloudinary.com/app-academy4/image/upload/v1647912128/Patchstagram/66346842095__0566A55A-DF10-4E86-A59A-F5694436FA4E_wmoi1w.jpg', 8, 'orange fish'),
   ('Mimi', 'Mimi24/7', 'https://res.cloudinary.com/app-academy4/image/upload/v1684861055/Patchstagram/Mimi2_nzcfiy.png"', 12, 'mouse');

INSERT INTO users (name, username, profile, age)
VALUES
    ('Brad', 'BradS213', 'https://ca.slack-edge.com/T3BTYDL2V-U01ACELS8V6-22995686aae5-512', 46);

INSERT INTO posts (title, image, post_date, user_id)
VALUES
    ('Napping Outside is always fun...', 
    'https://res.cloudinary.com/app-academy4/image/upload/v1647912033/Patchstagram/IMG_3394_fktg48.jpg',
    "2023-09-23", 1),
    ("Napping inside is pretty awesome too...",
    "https://res.cloudinary.com/app-academy4/image/upload/v1647912403/Patchstagram/64865942444__2B7B1A74-ECAF-4798-BEAB-D4890B7164C4_hnmowy.jpg",
    "2023-10-12", 2),
    ("I like my fish",
    "https://res.cloudinary.com/app-academy4/image/upload/v1647912006/Patchstagram/IMG_3437_u2frrk.jpg",
    "2023-11-23", 2),
    ("Now THIS is a party!",
    "https://res.cloudinary.com/app-academy4/image/upload/v1647912056/Patchstagram/IMG_3389_i6czzx.jpg",
    "2024-01-06", 3),
    ("This punk stole my tent! ⛺️",
    "https://res.cloudinary.com/app-academy4/image/upload/v1647912094/Patchstagram/IMG_3211_sy5wcy.jpg",
    "2024-01-17", 1),
    ("Look who I saw outside today...",
    "https://res.cloudinary.com/app-academy4/image/upload/v1684860951/Patchstagram/Mimi1_lxltmk.png",
    "2024-02-02", 1);


INSERT INTO comments (comment_text, user_id, post_id)
VALUES
    ("Enjoy your nap!", 2, 1),
    ("Love the pic!", 3, 1),
    ("That looks so cozy!", 1, 2),
    ("Thats a big fish!", 1, 3),
    ("Here fishy fishy!", 3, 3),
    ("Why wasn't I invited? 😩", 2, 4),
    ("Room for more?", 1, 4),
    ("How dare he!!!", 1, 5),
    ("No way!!!", 2, 6),
    ("Its MIMI!!!", 1, 6);


INSERT INTO likes (user_id, post_id)
VALUES
    (2,1),(3,1),(3,2),(1,3),(3,3),
    (2,4),(1,5),(3,5),(4,5),(3,6);