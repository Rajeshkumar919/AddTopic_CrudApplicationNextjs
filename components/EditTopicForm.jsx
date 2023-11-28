export default function EditTopicForm(){

    return (<form onSubmit={handleSubmit}className="flex flex-col gap-3">
    <input 
        onChange={(e)=>setTitle(e.target.value)}
    value={title}    
    }
        className="border border-state-500 px-8 py-2
    type=text"
    placeholder="Topic Title"/>
    <input 
        onChange={(e)=>setTitle(e.target.value)}
        value={description}
           
        className="border border-state-500 px-8 py-2
    type=text"
    placeholder="Topic Description"/>
    <button type="submit" className="bg-green-600 font-bold
    text-white py-3 px-6 w-fit">
    Add Topic
    </button>
    
    </form>));
}
