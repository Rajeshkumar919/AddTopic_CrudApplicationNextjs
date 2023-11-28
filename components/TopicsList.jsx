import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi";
const getTopics=async(){

try{

 const res=await fetch('http://localhost:3002/api/topics',{
 cache "no-store",
  
 });
 if(!res.ok){
 throw new Error('Failed to fetch topics');
  
 }
 return res.json();
}catch(error){
 
 console.log("Error loadng topics:",error);
}
 
};
export default async function TopicsList(){
const {topics}=await getTopics();
 
return (
<>
 {topics.map((t)=>(
 <div className="p-4 border border-state-300 my-3
 flex justify-between gap-5 items-start">
 <div>
    <h2 className="font-bold text-2xl">{t.title}</h2>
    <div>{t.description}n</div>
 </div>
 <div className="flex gep-2">
    <RemoveBtn/>
    <Link href={`/editTopic/${t._id}`}></Link>
    <HiPencilAlt siz={24}/>
    </div>
 </div>)}
</>

);


}
