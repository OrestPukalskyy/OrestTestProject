import styles from "./ToDoList.css"

export default function ToDoListItem({item, deleteFunc}){
    return <li data-id={item.id} key={item.id}><input type="checkbox"></input>{item.text}<button onClick={(e)=>deleteFunc(item.id)} className="delete-button">x</button></li>    
    }