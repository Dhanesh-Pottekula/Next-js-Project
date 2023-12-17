import mongoose from "mongoose";

const userSchema= mongoose.schema({

        username:{
            type:string,
            required:[true,"please provide with user name "],
            unique:true
        },
        email:{
            type:string,
            requied:true,
            unique:true
        },
        password:{
            type:string,
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
        forgetPasswordToken:string,
        forgetPasswordTokenExpiry:Date,
        verifyTocken:string,
        verifyTokenExpiry:Date,

})

const User=mongoose.models.users || mongoose.model("users",userSchema)

export default User