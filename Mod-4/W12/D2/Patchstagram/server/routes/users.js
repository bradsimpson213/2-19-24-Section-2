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



users.get("/stats", async (req, res) => {
    const numUsers = await User.count()
    const oldestUser = await User.max("age")
    const youngestUser = await User.min("age")
    const ageSum = await User.sum("age")

    const payload = {
        totalUsers: numUsers,
        maxAge: oldestUser,
        minAge: youngestUser,
        averageAge: ageSum / numUsers
    }

    res.json(payload)

})


users.get("/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id)
    console.log(user)
    const posts = await user.getPosts() 

    const payload = {
        user: user,
        posts: posts
    }
    res.json(payload)

})






module.exports = users;