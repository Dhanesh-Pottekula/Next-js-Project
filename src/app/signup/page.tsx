"use client";
import Link from "next/link"
import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation"
import axios from "axios";
import toast from "react-hot-toast";

export default function userSignUp(){
    const router = useRouter();
    const [user,setuser]=React.useState({
        email:"",
        password :"",
        username :""
    })
    const [desabledButton,setDesabledButton]= useState(true)
    useEffect(()=>{
        if (user.email.length>0 && user.password.length>0 && user. username.length>0){
            setDesabledButton(false);
        }else{
            setDesabledButton(true);
        }
    },[user])
    const [loading, setloading]=useState(false)
    const signup = async ()=>{
        try {
            setloading(true);
            const response =await axios.post("/api/users/signup",user)
            console.log("signup success",response.data);
            router.push("/login")

        } catch (error:any) {
            console.log("error occured",error.message)
            toast.error(error.message)
        }finally{
            setloading(false);
        }
        
    }
    return (
        <div className="flex flex-col justify-center items-center p-3 py-2 min-h-screen " >
            <h1>this is signup page </h1>
            <h1 className=" bg-amber-200 p-3 font-bold">{loading?"Processing....":null} </h1>
            
            <label>email</label>
            <input className="text-black" type="text" value={user.email} placeholder="email" onChange={(e)=>{setuser({...user,email:e.target.value})}}></input>
            
            <label>password</label>
            <input type="text"  className="text-black" value={user.password} placeholder="password" onChange={(e)=>{setuser({...user,password:e.target.value})}}></input>
            
            <label>username</label>
            <input type="text" className="text-black"  value={user.username} placeholder="username" onChange={(e)=>{setuser({...user,username:e.target.value})}}></input>
            
            <button onClick={signup}  className=" p-2 bg-yellow-950 "> {desabledButton? "SignUp Disabled":"Signup"}</button>
            <Link href="/login"> go to login page </Link>
        </div>
    )
}