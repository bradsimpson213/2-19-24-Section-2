const express = require("express")
const { users } = require("./data")
const postsRouter = require("./routes/posts")
const usersRouter = require("./routes/users")

require("dotenv").config()

const app = express()
app.use(express.json())

const pathPrinter = (req, res, next) => {
    console.log(`Request path: ${req.path}`)
    next()
}

console.log(process.env.SECRET)

app.use(pathPrinter)

app.use("/posts", postsRouter)
app.use("/users", usersRouter)


// app.use((req, res, next) => {
//     console.log("error test")
//     const error = "We have made a boo boo (aka error)"
//     next(error)
// })

app.get(["/feed"], (req, res) => {
    // res.send("Hey we hit this route!  yay!")
    res.json(someData)
})


// app.use((req, res, next) => {
//     console.log('error test');
//     const error = { message: `Sorry the requested route "${req.path}" was not found! :(` }
//     error.statusCode = 404;
//     next(error);
// })

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




const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is listening on port ${port}...`))