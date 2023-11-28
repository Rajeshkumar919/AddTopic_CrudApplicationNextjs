"use client";
import {useState} from "react";
import {useRouter} from "next/nevigation";
export default function EditTopicForm(){
        const [newTitle,setNewTitle]=useState(title);
    const [newDescription,setNewDescription]=useState(description);
const router = useRouter();
    const handleSubmit=saync(e)=>{

        e.preventDefault();
        try{

            const res=await fetch(`http:localhost:3002/api/topics/${id}`,{

                method: "PUT",
                headers: {

                    "Content-type":"application/json",
                },
                body:JSON.strigify({newTitle,newDescription}),
            });
            if(!res.ok){
                throw new Error("Failed to update topic");
            }
            router.refresh();
            router.push("/")
        }
        catch(error){
            console.log(error);
        }
    }
    return (<form onSubmit={handleSubmit}className="flex flex-col gap-3">
    <input 
        onChange={(e)=>setNewTitle(e.target.value)}
    value={newtitle}    
    }
        className="border border-state-500 px-8 py-2
    type=text"
    placeholder="Topic Title"/>
    <input 
        onChange={(e)=>setNewDescription(e.target.value)}
        value={newDescription}
           
        className="border border-state-500 px-8 py-2
    type=text"
    placeholder="Topic Description"/>
    <button type="submit" className="bg-green-600 font-bold
    text-white py-3 px-6 w-fit">
    Add Topic
    </button>
    
    </form>));
}
