const express = require("express")

const colors = express.Router()

"/colors"

colors.get("", (req, res) => {
    res.json("GET /colors")
})

colors.get("/:name", (req, res) => {
    res.json(`GET /colors/:name`)
})

"/colors"

module.exports = colors;