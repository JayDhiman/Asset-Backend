import cookieParser from "cookie-parser";
import express  from "express";

const app = express()

app.use(cors())
app.use(express.urlencoded({extendtend:true, limit:
    "16kb"}))
app.use(express.json({
    limit:"16kb"
}))
app.use(cookieParser())
app.use(express.static("public"))




export { app }