const express = require("express")


const app = express()



app.get("/posts/all", (req, res) => {
    res.send("Hey we hit this route!  yay!")
})



const port = 5000

app.listen(port, () => console.log(`Server is listening on port ${port}...`))