import { url } from "inspector";
import { NextRequest,NextResponse } from "next/server";
export function middleware(request:NextRequest){

    const path=request.nextUrl.pathname
    const isPublicPath= path==="/login" || path==="/signup"  
    const token = request.cookies.get("token")?.value

    // redirecting the user with token
    if (isPublicPath && token){
        return NextResponse.rewrite(new URL("/profile",request.nextUrl))
    }

    
    
    if (!isPublicPath && !token){
        return NextResponse.rewrite(new URL("/login",request.nextUrl))
    }
}

export const config={
    matcher:[
        '/',
        '/profile',
        '/login',
        '/signup'
]}