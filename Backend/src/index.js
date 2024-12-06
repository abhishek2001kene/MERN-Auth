import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/mongo.js"


dotenv.config({
    path:'/env'
})

connectDB()


