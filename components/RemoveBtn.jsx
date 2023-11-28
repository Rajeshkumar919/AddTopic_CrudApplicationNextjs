'use client';

import {HiOutlineTrash} from "react-icons/hi";
import {useRouter} from "next/nevigation";
export default function RemoveBtn({id}){

    const removeTopic = async()=>{

        const conformed = confirm('Are you sure?');
        if(confirmed){

           const res= await fetch(`https://localhost:3002/api/topics?id=${id}`,{

                method: "DELETE",
            });
            if(res.ok){
                 router.refresh();
            }
           
        }
    }
    return (<button onClick={removeTopic} className="text-red-400">
        <HiOutlineTrash size={24}/>
    </button>);
}
