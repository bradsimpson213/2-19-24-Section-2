const express = require("express")
const { someData } = require("../data")

const router = express.Router()


router.get(["/all"], (req, res) => {
    // res.send("Hey we hit this route!  yay!")
    res.json(someData)
})

router.get("/:id", (req, res) => {
    console.log("REQ PARAMS",req.params.id)
    const post = someData.find( post => (post.id === parseInt(req.params.id)))
    console.log(post)
    res.json(post)
})

const checkUserInput = (req, res, next) => {
    console.log("Checcking Input...")
    if (!req.body.name) {
        return res.send("Please include a name property")
    }
    next()
    
}

router.use("/new", checkUserInput)

router.post("/new", (req, res) => {
    console.log("WE HIT THIS ROUTE")
    console.log(req.body.name)

    res.json(someData)
})

module.exports = router;