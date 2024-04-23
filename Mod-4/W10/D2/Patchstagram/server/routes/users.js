const express = require("express")
const { users } = require("../data")

const userRouter = express.Router()


userRouter.get("/search", (req, res) => {
    console.log(req.query.name)
    const selectedUser = users.find( user => user.name.includes(req.query.name))
    res.json(selectedUser)
})


module.exports = userRouter