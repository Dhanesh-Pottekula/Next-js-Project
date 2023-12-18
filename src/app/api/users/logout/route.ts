import { NextRequest,NextResponse } from "next/server"
import connection from "@/dbConfig/dbConfig"



connection()

export async function GET(req:NextRequest){
    try {
        const response= NextResponse.json({message:"lougout is succcessfull "})
        response.cookies.set("token","",{httpOnly:true})
        return response
        
    } catch (erro:any) {
        return NextResponse.json({message:"logout failed"})
    }
}