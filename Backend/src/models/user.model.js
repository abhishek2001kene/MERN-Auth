import { timeStamp } from "console"
import mongoose from "mongoose"
import { type } from "os"

const userSchema = mongoose.Schema({

    fullName:{
        type:string,
        required:true,
    },
    email:{
        type:string,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:true,
    },



},
{
    timeStamp:true
})

export default User = mongoose.model('User', userSchema)