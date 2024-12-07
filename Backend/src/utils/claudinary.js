import {v2 as claudinary} from "cloudinary"
import fs from "fs"


claudinary.config({

    cloud_name:process.env.CLAUDINARY_NAME,
    api_key:process.env.CLAUDINARY_API_KEY,
    api_secret:process.env.CLAUDINARY_API_SECRETE
})



const upoadeOnClaudenary = async function (localFilePath) {
    if(!localFilePath) return null;
    try {
        await claudinary.uploader.upload(localFilePath, {resource_type:"auto"})
        console.log('File uploaded on cloudnury successfully.')

        fs.unlinkSync(localFilePath)


    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}



export {upoadeOnClaudenary}