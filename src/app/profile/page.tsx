"use client"


import axios from "axios"
import {useRouter} from "next/navigation"
import { useState } from "react";
export default function Userprofile (){

    const router=useRouter();
    const [userdata,setUserData]:any =useState("")
    async function logout (){
        try {
            const response = await axios.get("/api/users/logout")
            router.push("/login")
            
        } catch (error:any) {
            console.log("error ",error.message)
        }

    }
    const getUserDdetails = async ()=>{
        const  res = await axios.get("/api/users/me")
        const user= res.data.data
        console.log(user)
        setUserData(user)
        
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1> User profile</h1>
            <h2>{userdata===""?null:userdata.username}</h2>
            
            <button className=" bg-yellow-100 p-4 rounded-xl text-black" onClick={logout}> logout</button>
            <button  onClick={getUserDdetails} className=" bg-slate-400 p-4">get userData</button>
        </div>
    )
}