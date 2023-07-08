import express from "express"
import helmRoutes from "./routes/helmRoutes.js";

const app = express()
const port = 8080

app.use(express.json());

app.use("/helms", helmRoutes)

app.listen(port, ()=>{
    console.log(`server berjalan di port ${port}`)
})