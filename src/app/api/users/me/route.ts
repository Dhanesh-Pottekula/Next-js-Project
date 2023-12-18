import { getdataFromToken } from "@/helpers/getdatafromtocken";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";
import connection from "@/dbConfig/dbConfig";

connection()
export async function GET (req:NextRequest){
    try {
        const tokendata= await getdataFromToken(req)
        console.log(tokendata.id)
        const user:any = await User.findOne({_id:tokendata.id})
        return NextResponse.json({data:user})

    } catch (error:any) {
        return NextResponse.json({error:error})
    }
} 