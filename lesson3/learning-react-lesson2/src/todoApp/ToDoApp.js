import React, {Component} from "react"
import AddToDo from "./AddToDo";
import './ToDoApp.css';
import ToDoFilter from "./ToDoFilter";
import ToDoList from "./ToDoList";

class AppToDo extends Component{
    state={
        todos:[
            // {id:1,content:"Learn React",isCompleted:false},
            // {id:2,content:"Vue JS",isCompleted:false},
            // {id:3,content:"Learn Ember",isCompleted:false},
            // {id:4,content:"Learn Angular",isCompleted:false}
        ],
        filterValue:"",
    };

    onAddNewTodo=(todo)=>{
        this.setState({
            todos: [todo,...this.state.todos]
        })
    }

    onUpdateStatus=(id)=>{
        // console.log(id)
        const {todos}=this.state;
        const idx=todos.findIndex((todo)=>todo.id===id);
        todos[idx]["isCompleted"]=true;
        this.setState({
            todos:todos,
        })
    }

    onFilterChange=(filterValue)=>{
        this.setState({
            filterValue,
        })
    }

    render(){
        const {todos,filterValue}=this.state;
        return (
            <div className="todo-wrapper">
                <div className="todo-container">
                    <ToDoFilter onFilterChange={this.onFilterChange}/>
                    <ToDoList todos={todos}
                              onUpdateStatus={this.onUpdateStatus}
                              filterValue={filterValue}
                            />
                    <AddToDo onAddNewTodo={this.onAddNewTodo}/>
                </div>
            </div>
        )
    }
}
export default AppToDo;