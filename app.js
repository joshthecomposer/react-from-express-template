const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log("Server Started"))

app.use(express.static("client/dist"))


const testData = [
    {
        firstName: "Dan",
        lastName: "Rathers",
        email: "d@gmail.com"
    },
    {
        firstName: "Bill",
        lastName: "TheButcher",
        email: "b@gmail.com"
    }
]

app.get("/api/test", (req, res) => {
    res.send(testData)
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist", "index.html"))
})