import mongoose from "mongoose";

export default async function connection (){
    let url=""
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
    }
}