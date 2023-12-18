"use client"

import axios from "axios"
import {useRouter} from "next/navigation"
export default function Userprofile ({params}:any){
    const router=useRouter();
    async function logout (){
        try {
            const response = await axios.get("/api/users/logout")
            router.push("/login")
            
        } catch (error:any) {
            console.log("error ",error.message)
        }

    }


    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1> User profile</h1>
            <button className=" bg-yellow-100 p-4 rounded-xl text-black" onClick={logout}> logout</button>
        </div>
    )
}