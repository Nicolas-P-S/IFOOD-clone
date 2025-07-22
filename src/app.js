import express from "express"
import dotenv from "dotenv"
import router from "./routes/index.js"

const app = express()
dotenv.config()

app.use(express.json())
app.use(router)

app.get("/", (req, res) => {
    res.send("API RODANDO!")
})

export default app
