const express = require("express");

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json("Hello world")
})

app.get("/students", (req, res) => {
    res.status(200).json({name: "Nehal Kadyan"})
})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})