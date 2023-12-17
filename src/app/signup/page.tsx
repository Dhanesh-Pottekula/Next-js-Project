"use client";
import Link from "next/link"
import React from "react";
// import {useReact} from "next/navigation"
import axios from "axios"

export default function userSignUp(){
    const [user,setuser]=React.useState({
        email:"",
        password :"",
        username :""
    })

    const signup = async ()=>{
        
    }
    return (
        <div className="flex flex-col justify-center items-center p-3 py-2 min-h-screen " >
            <h1>this is signup page </h1>
            
            <label>email</label>
            <input type="text" value={user.email} placeholder="email" onChange={(e)=>{setuser({...user,email:e.target.value})}}></input>
            
            <label>password</label>
            <input type="text" value={user.password} placeholder="password" onChange={(e)=>{setuser({...user,password:e.target.value})}}></input>
            
            <label>username</label>
            <input type="text" value={user.username} placeholder="username" onChange={(e)=>{setuser({...user,username:e.target.value})}}></input>
            
            <button onClick={signup}  className=" p-2 bg-yellow-950 "> Signup</button>
            <Link href="/login"> go to login page </Link>
        </div>
    )
}