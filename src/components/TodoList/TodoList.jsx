import ToDoListItem from "../ToDoListItem/ToDoListItem"

export default function TodoList({todoListItems,deleteFunc}){
  
    return(<div>
      <ul key='1'>
         {todoListItems.map((item)=>(<ToDoListItem item={item} deleteFunc={deleteFunc} />))}
      </ul>
    </div>);
  }
