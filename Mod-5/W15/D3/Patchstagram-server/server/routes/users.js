const express = require("express")
const { User } = require("../db/models")
const { Op } = require('sequelize')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const users = express.Router()



users.get("/all", async (req, res) => {
    const allUsers = await User.findAll()
    // attributes: ["name", "username", "age"],
    // where: {
    //     age: {
    //         [Op.between]: [6, 10]
    //     } 
    // }
    // order: [
    //     ["age", "ASC"],
    //     ["name", "ASC"]
    // ]
    res.json({ users: allUsers })
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
    const user = await User
        .scope(["defaultScope", "userForPost"])
        .findByPk(req.params.id)

    console.log(user)
    const posts = await user.getPosts()

    const payload = {
        user: user,
        posts: posts
    }
    res.json(payload)
})

users.post("/signup", async (req, res) => {
    const { name, username, email, password,
        profile, age, breed, favToy } = req.body


    const hashedPassword = bcrypt.hashSync(password)
    console.log("HP!", hashedPassword)

    const user = await User.create({
        name, username, email, hashedPassword, profile,
        age, breed, favToy
    })

    const safeUser = {
        id: user.id,
        username: user.username
    }

    const token = jwt.sign(
        safeUser,
        process.env.SECRET_KEY,
        { expiresIn: '10m' }
    )

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: true && "Lax",
        maxAge: 600000
    })

    return res.json({
        user: safeUser,
        message: "New user created!"
    })
})


users.post("/login", async (req, res) => {
    const { credential, password } = req.body

    const user = await User
        .scope({ method: ["findUser", credential] })
        .findOne()

    if (!user || !bcrypt.compareSync(password, user.hashedPassword.toString())) {
        console.log('USER NOT FOUND')
        res.send("User not found, try again!")
    } else {
        console.log("WE FOUND A USER!", user)

        const safeUser = {
            id: user.id,
            username: user.username
        }

        const token = jwt.sign(
            safeUser,
            process.env.SECRET_KEY,
            { expiresIn: '10m' }
        )

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: true && "Lax",
            maxAge: 600000
        })

        return res.json(safeUser)
    }
})

users.delete("/logout", async (req, res) => {
    res.clearCookie("token")
    return res.json({ message: "Logout successful!" })
})



module.exports = users;