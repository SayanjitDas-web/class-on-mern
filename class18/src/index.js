require("dotenv").config()

const express = require("express")
const cors = require("cors")
const {connectToDb} = require("./config/db")
const port = process.env.PORT | 3000
const app = express()

const homeRouter = require("./routes/home.route")
const authRouter = require("./routes/user.route")
const recipeRouter = require("./routes/recipe.route")
const cookieParser = require("cookie-parser")

connectToDb()

app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/example",homeRouter) 
app.use("/api/auth", authRouter)
app.use("/api/recipe", recipeRouter)

app.listen(port,() => {
    console.log(`app is strated at http://localhost:${port}`)
})