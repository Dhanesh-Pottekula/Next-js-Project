import mongoose from "mongoose";

const userSchema = mongoose.Schema({

        username:{
            type:String,
            required:[true,"please provide with user name "],
            unique:true
        },
        email:{
            type:String,
            requied:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        isverified:{
            type:Boolean,
            default:false
        },
        isadmin:{
            type:Boolean,
            default:false
        },
        forgetPasswordToken:String,
        forgetPasswordTokenExpiry:Date,
        verifyTocken:String,
        verifyTokenExpiry:Date,

})

const User=mongoose.models.users || mongoose.model("users",userSchema)

export default User