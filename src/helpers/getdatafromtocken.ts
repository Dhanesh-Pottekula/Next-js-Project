import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"

export async function getdataFromToken(req:NextRequest){
    try {
        const encodedToken:any= req.cookies.get("token")?.value || "";
        const decodedToken:any =  jwt.verify(encodedToken,process.env.TOKEN_SECRETE!)
        
        return decodedToken
        
    } catch (error:any) {
        throw new error("something went wrong while decoding the token")
    }
}