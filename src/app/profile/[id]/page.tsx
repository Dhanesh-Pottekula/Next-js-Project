export default function Userprofile ({params}:any){

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1> User profile</h1>
            <span className=" bg-orange-300 p-3"> {params.id}</span>
        </div>
    )
}