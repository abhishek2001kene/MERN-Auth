import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { error } from "console"

dotenv.config()


mongoose.connect(process.env.MONGO_URL)
.then(() =>{
    console.log("db done")
})
.catch((error) =>{
    console.log(error)
})


const app = express()





app.listen(3000, ()=>{
    console.log("hello !!!")
})