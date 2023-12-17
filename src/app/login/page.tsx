"use client";
import Link from "next/link"
import React from "react";
// import {useReact} from "next/navigation"
import axios from "axios"

export default function userSignUp(){
    const [user,setuser]=React.useState({
        email:"",
        password :""
    })

    const login = async ()=>{
        
    }
    return (
        <div className="flex flex-col justify-center items-center p-3 py-2 min-h-screen " >
            <h1>this is login page </h1>
            
            <label>email</label>
            <input type="text" value={user.email} placeholder="email" onChange={(e)=>{setuser({...user,email:e.target.value})}}></input>
            
            <label>password</label>
            <input type="text" value={user.password} placeholder="password" onChange={(e)=>{setuser({...user,password:e.target.value})}}></input>
            
            <button onClick={login}  className=" p-2 bg-yellow-950 "> login</button>
            <Link href="/signup"> go to signup page </Link>
        </div>
    )
}