const express = require("express")
const { users } = require("../data")
const sqlite3 = require('sqlite3')

const userRouter = express.Router()

console.log(process.env.DB_FILE)

const db = new sqlite3.Database(process.env.DB_FILE, sqlite3.OPEN_READWRITE);


userRouter.get("/all", (req, res) => {
    const sql = "SELECT * FROM users;"
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    })
})


// userRouter.get("/:id", (req, res) => {
//     const sql = `SELECT * FROM users WHERE id = ${req.params.id}`
//     db.get(sql, [], (err, row) => {
//         if (err) {
//             res.json(err)
//         } else {
//             res.json(row)
//         }
//     })
// })

userRouter.get("/:id", (req, res) => {
    const sql = "SELECT * FROM users WHERE id = ?"
    db.get(sql, [req.params.id], (err, row) => {
        if (err) {
            res.json(err)
        } else {
            res.json(row)
        }
    })
})



userRouter.get("/search", (req, res) => {
    console.log(req.query.name)
    const selectedUser = users.find( user => user.name.includes(req.query.name))
    res.json(selectedUser)
})


userRouter.post("/new", (req, res) => {
    const { name, username, profile, age, fav_toy } = req.body;
    console.log("NAME", name)

    const sql = `INSERT INTO users (name, username, profile, age, fav_toy) VALUES (${name}, ${username}, ${profile}, ${age}, ${fav_toy});`

    db.run(sql, [], (err) => {
        if (err) {
            res.json(err)
        } else {
            res.json({
                message: "User created!"
            })
        }
    })

})
// userRouter.post("/new", (req, res) => {
//     const { name, username, profile, age, fav_toy } = req.body;
//     console.log("NAME", name)

//     const sql = "INSERT INTO users (name, username, profile, age, fav_toy) VALUES (?,?,?,?,?);"

//     db.run(sql, [name, username, profile, age, fav_toy], (err) => {
//         if (err) {
//             console.log(err)
//             res.json(err)
//         } else {
//             res.json({
//                 message: "User created!"
//             })
//         }
//     })

// })




module.exports = userRouter