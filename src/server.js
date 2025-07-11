const express = require("express")
const cors = require("cors")
const router = require("./routes")

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use("/api", router)

app.get("/", (req, res) => {
    res.send("API RODANDO!")
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
