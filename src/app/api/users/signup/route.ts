import connection from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server"
import bcryptjs from "bcryptjs";


connection()

export async function POST (request:NextRequest){

    try {
        console.log("post request recived")
        const reqBody= await request.json()
        const {username,password,email}=reqBody
        console.log("this is req body",reqBody)
        console.log("email",typeof(email))
        //checking the user already exists
        const user =await User.findOne({email})
        if (user){
            return NextResponse.json({Error:"User is already exists"})
        }

        //hash pasword
        const salt= await bcryptjs.genSalt(10)
        const hashedPassword= await bcryptjs.hash(password,salt)

        const newUser=new User ({
            email,
            password:hashedPassword,
            username
        })

        const savedUser = await newUser.save()
        return NextResponse.json({message:"success",response:savedUser})

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}