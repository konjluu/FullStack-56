import React from "react";
import ToDoItem from "./ToDoItem";
const ToDoList=(props)=>{
    const {todos,onUpdateStatus,filterValue}=props;
    const todosContent= todos
        .filter((todo)=>todo.content.includes(filterValue))
        .map((todo)=><ToDoItem todo={todo} key={todo.id} onUpdateStatus={onUpdateStatus}/>)

    return (
        <div>
            <h5>ToDo List</h5>
            {todos.length===0? (<p>Please promt new tast </p>)
            :
            todosContent
            }
        </div>

        )
    
}

export default ToDoList;