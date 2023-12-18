import { error } from "console";
import mongoose from "mongoose";

export default async function connection (){
    let url="mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1"
    try{
        mongoose.connect(url)
        const connection =mongoose.connection
        connection.on("connected",()=>{
            console.log ("mongoose connection is successful")
        })
        connection.on ("error",()=>{
           console.log ("error occured") 
        })
    }
    catch{
        console.log("something goes wrong ")
        error("mongoose not connected ");
    }
}