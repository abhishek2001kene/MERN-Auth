import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = mongoose.Schema({

    fullName:{
        type:string,
        required:true,
        trim:true,
        index:true
    },
    email:{
        type:string,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:[true, "Password is required"],
    },
    avatar:{
        type:string,
        required:true,
    },



},
{
    timeStamp:true
})



userSchema.pre("save", async function (req, res, next){

if(!this.isModifide("password")) return next();
this.password = bcrypt.hash(this.password, 10)
next()
})


userSchema.methods.ispasswordCorrect = async function (password) {
    
    return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateAccessToken = async function () {
    jwt.sign(
        {
            _id:this._id
        },
        process.env.ACCESS_TOKEN_SECRETE,
        {
            expiresIn : process.env.ACCESS_TOKEN_SECRETE
        }
    )
}


userSchema.methods.generatRefreshToken = async function () {

    jwt.sign(
        {
            _id:this._id
        },
        process.env.REFRESH_TOKEN_SECRETE,
        {
            expiresIn:process.env.REFRESH_TOKEN_SECRETE
        }
    )
    
}


export default User = mongoose.model('User', userSchema)