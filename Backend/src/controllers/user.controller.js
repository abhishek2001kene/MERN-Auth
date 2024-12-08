import {asyncHandler} from "../utils/AsyncHandeler.js"
import {ApiError}from "../utils/ApiError.js"
import {ApiResponcse} from "../utils/ApiResponse.js"
import mongoose from "mongoose"
import {User} from "../models/user.model.js"


const registerUser = asyncHandler(async (req, res) =>{

 
    const { username, email, fullName, password } = req.body;

    if([fullName, username, email, password].some((field)=>
   field?.trim()===""))
   {
       throw new ApiError(400, "All feilds are required")
   }
   console.log("Incoming request body:", req.body);
   
   
   
   const existedUser = await User.findOne({
       $or:[{username}, {email}]
   })
   
   
   if(existedUser){
       throw new ApiError(409, "User with username or email already exists")
   }
   
   const user = await User.create({
       username,
       fullName,
       email,
       password
   })
   
   
   const createdUser = await User.findById(user._id).select(
       "-password -refreshToken"
   )
   
   
   if(!createdUser){
       throw new ApiError(500, "something Went wrong")
   }


return res
.status(200)
.json({
message: "ok"
})



})




export {
    registerUser
}