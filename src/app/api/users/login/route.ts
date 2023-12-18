import connection from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server"
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"


connection()

export async function POST (request:NextRequest){
    try {
        const req=await request.json()
        const {email,password}=req

        //check user exists 
        const user=await User.findOne({email})

        if (!user){
           return NextResponse.json({message:"user not found "})
        }

        //checking the password 
        const validPassword = await bcryptjs.compare(password,user.password)
        if (!validPassword){
           return NextResponse.json({message:"password is not valid "})
        }

        //token 
        const tokenData={
            id:user._id
        }
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRETE!,{expiresIn:"1d"})
        const response= NextResponse.json({message:"login is succesfull "})
        response.cookies.set("token",token,{httpOnly:true})

        return response
    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }finally{

    }


}
