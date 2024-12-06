import dotenv from "dotenv"
import connectDB from "./db/mongo.js"
import app from "./app.js"


dotenv.config({
    path:'/env'
})

connectDB().then(() => {
    app.listen(process.env.PORT || 8000, ()=>{
        console.log("Mongodb connected successfully wooooww")
    })
})
.catch((error) => {
    console.log("Mongodb connetion erroe = ",error)
})

