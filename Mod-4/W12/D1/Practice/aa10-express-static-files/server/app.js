const express = require('express');
const app = express();

// Your code here 
// Part 1
app.use('/stylesheets', express.static('assets/css'));

// Part 2
// app.use(express.static('assets'));

// Part 3
app.use(express.static('assets/scripts'));

// BONUS
app.use('/stickers', express.static('assets/images'));

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));