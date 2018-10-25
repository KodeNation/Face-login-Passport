
const express = require("express")
const path = require("path")
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (r, s) => {
    s.send("home page")
})

app.use("/auth",require('./authRoutes'))

//server starts listening
app.listen(8888, () =>
    console.log("up at http://localhost:8888")
)