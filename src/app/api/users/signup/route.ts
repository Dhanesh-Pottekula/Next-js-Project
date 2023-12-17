import connection from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server"
import bcryptjs from 'bcryptjs';


connection()

export async function POST (request:NextRequest){
    try {
        const reqBody= await request.json()
        const {username,password,email}=reqBody
        console.log(reqBody)
    } catch (error:any) {
        NextResponse.json({error:error.message},{status:500})
    }
}