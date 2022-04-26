import React from "react";
import { v4 as uuidv4 } from 'uuid';
 class AddToDo extends React.Component{
    state={
        content : ""
    }
    onChangeHandler=(e)=>{
        const{value,name}=e.target;
        this.setState({
            ...this.state,
            [name]:value,
        })
        
    }
    onSubmitHandler=(e)=>{
        e.preventDefault();
        const newTodo={
            id:uuidv4(),
            content: this.state.content,
            isCompleted:false,
        }
        this.props.onAddNewTodo(newTodo);
        this.setState({
            content:"",
        })
    }
    render(){
        return (
            <div className="addTodo-container">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="row">
                        <div className="col-10">
                            <div className="form-group">
                                <input type="text" 
                                       className="form-control" 
                                       name="content"
                                       value={this.state.content}
                                       aria-describedby="helpId"
                                       placeholder="Add a new ToDo"
                                       onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="col-2">
                            <button type="submit" className="btn-primary">ADD</button>
                        </div>
                    </div>
    
                </form>
    
            </div>
    
        )
    }
 }
export default AddToDo;