// app.js
require("dotenv").config();
const express = require("express");
const morgan = require("morgan")
const postsRouter = require('./routes/posts')
const userRouter = require("./routes/users")

const jwt = require("jsonwebtoken")

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// app.use("/styles", express.static('assets/css'))
// app.use("/pictures", express.static('assets/images'))
// app.use("/javascript", express.static('assets'))
app.use(express.static("./public"))

app.use("/posts", postsRouter)
app.use("/users", userRouter)


app.get("/", (req, res) => {
    res.sendFile("index.html")
})


app.get("/testjwt", (req, res) => {
    // "ilovebacon" + "qewngqpogqpmqkrg[qkejr[oglh"  -> hash -> "851a2b9013d4dde681ba3d8bc9f78ba9db9aba2a8b5c8af21cf56bbb76a1c0ba3c238d35a38c61edf69188d36e55fe5c245b75098607515f1e45d632e6756df8"
    // "iluvefood" + "qewngqpogqpmqkrg[qkejr[oglh"  -> hash -> "851a2b9013d4dde681ba3d8bc9f78ba9db9aba2a8b5c8af21cf56bbb76a1c0ba3c238d35a38c61edf69188d36e55fe5c245b75098607515f1e45d632e6756df8"

    const token = jwt.sign(
        { email: "brads@gmail.com" },
        process.env.SECRET_KEY,
        { expiresIn: '10m'}
    )

    console.log("MY JRR TOKEN",token)

    const payload = jwt.decode(token)

    console.log("DECODED JRR TOKEN", payload)

    const verifiedToken = jwt.verify(token, process.env.SECRET_KEY)

    console.log("VERIFIED JRR TOKEN", verifiedToken )

    res.send("JWT stuff processed...")

})





app.use((req, res, next) => {
    console.log('error test');
    const error = new Error(`Sorry the requested route "${req.path}" was not found!`)
    console.log(error)
    error.statusCode = 404;
    console.log(error)
    next(error);
})

// catch all error handler
app.use((error, req, res, next) => {
    console.log(error.message)
    const status = error.statusCode || 500;
    res.status(status)
    res.json({
        message: error.message,
        statusCode: status
    })
})

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));