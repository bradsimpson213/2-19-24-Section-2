const express = require("express")
const { User } = require("../db/models")
const { Op } = require('sequelize')

const users = express.Router()



users.get("/all", async (req, res) => {
    const allUsers = await User.findAll({
        attributes: ["name", "username", "age"],
        where: {
            age: {
                [Op.between]: [6, 10]
            } 
        }
        // order: [
        //     ["age", "ASC"],
        //     ["name", "ASC"]
        // ]
    })
    // console.log(allUsers)
    res.json(allUsers)
})


module.exports = users;