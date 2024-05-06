// app.js
require("dotenv").config();
const express = require("express");
const morgan = require("morgan")
const postsRouter = require('./routes/posts')
const userRouter = require("./routes/users")
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/styles", express.static('assets/css'))
app.use("/pictures", express.static('assets/images'))
app.use("/javascript", express.static('assets'))


app.use("/posts", postsRouter)
app.use("/users", userRouter)


app.get("/", (req, res) => {
    res.send("Welcome to our server!")
})


const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));