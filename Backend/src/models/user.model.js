import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = mongoose.Schema({

    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:[true, "Password is required"],
    },
    // avatar:{
    //     type:String,
    //     required:true,
    // },



},
{
   timestamps:true
})



userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10); // Ensure `await` is used here
    next();
});


userSchema.methods.ispasswordCorrect = async function (password) {
    
    return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
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

    return jwt.sign(
        {
            _id:this._id
        },
        process.env.REFRESH_TOKEN_SECRETE,
        {
            expiresIn:process.env.REFRESH_TOKEN_SECRETE
        }
    )
    
}



export const  User = mongoose.model('User', userSchema)