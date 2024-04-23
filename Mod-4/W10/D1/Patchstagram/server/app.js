const express = require("express")
const { someData, users } = require("./data")


const app = express()
app.use(express.json())


app.get(["/posts/all", "/feed"], (req, res) => {
    // res.send("Hey we hit this route!  yay!")
    res.json(someData)
})


app.get("/posts/:id", (req, res) => {
    console.log("REQ PARAMS",req.params.id)
    const post = someData.find( post => (post.id === parseInt(req.params.id)))
    console.log(post)
    res.json(post)
})


app.post("/posts/new", (req, res) => {
    console.log("WE HIT THIS ROUTE")
    console.log(req.body)
    res.send("This is the post route")
})


app.get("/users/search", (req, res) => {
    console.log(req.query.name)
    const selectedUser = users.find( user => user.name.includes(req.query.name))
    res.json(selectedUser)
})

const port = 5000

app.listen(port, () => console.log(`Server is listening on port ${port}...`))