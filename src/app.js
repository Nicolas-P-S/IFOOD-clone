import express, {json} from "express"
import cors from "cors"
import router from "./routes/index.js"

const app = express()

app.use(cors())
app.use(json())

app.use("/api", router)

app.get("/", (req, res) => {
    res.send("API RODANDO!")
})

export default app
