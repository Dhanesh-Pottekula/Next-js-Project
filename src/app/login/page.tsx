"use client";
import Link from "next/link"
import React from "react";
import {useRouter} from "next/navigation"
import axios from "axios"
import { useState,useEffect } from "react";

export default function userLogin(){
    const router = useRouter();
    const [user,setuser]=React.useState({
        email:"",
        password :""
    })
    const [desabledButton,setDesabledButton]= useState(true)
    useEffect(()=>{
        if (user.email.length>0 && user.password.length>0){
            setDesabledButton(false);
        }else{
            setDesabledButton(true);
        }
    },[user])
    const [loading, setloading]=useState(false)

    const login = async ()=>{
        try {
            setloading(true);
            const response =await axios.post("/api/users/login",user)
            router.push("/profile")
            
        } catch (error:any) {
            console.log("error occured",error.message)
            
        }finally{
            setloading(false);
        }
        
    }
    return (
        <div className="flex flex-col justify-center items-center p-3 py-2 min-h-screen " >
            <h1>this is login page </h1>
            <h1 className=" bg-amber-200 p-3 font-bold">{loading?"Processing....":null} </h1>
            
            
            <label>email</label>
            <input type="text" className="text-black"  value={user.email} placeholder="email" onChange={(e)=>{setuser({...user,email:e.target.value})}}></input>
            
            <label>password</label>
            <input type="text" className="text-black"  value={user.password} placeholder="password" onChange={(e)=>{setuser({...user,password:e.target.value})}}></input>
            
            <button onClick={login}  className=" p-2 bg-yellow-950 "> login</button>
            <Link href="/signup"> go to signup page </Link>
        </div>
    )
}