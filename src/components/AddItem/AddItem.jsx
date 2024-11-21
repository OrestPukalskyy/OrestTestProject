import { useState } from "react"

export default function AddItem({onAddItem}){

 const[isEdited,setIsedited]=useState(false);
 const[listName,updateListName]=useState("");

    function handleAddItemClick(){
        
        if(isEdited){
            
            onAddItem(listName);
        }
        setIsedited(!isEdited);

    }

    function updateListNameHandle(event){       
        updateListName(event.target.value);
    }


    if(isEdited){
        return <>
        <input onChange={updateListNameHandle} type="text"></input>
        <button onClick={handleAddItemClick}>Save</button> 
        </>
    }
        return <>
        <button onClick={handleAddItemClick}>Add</button>
       </>
    
   
}
