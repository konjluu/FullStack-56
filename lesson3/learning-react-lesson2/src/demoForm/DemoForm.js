import React, { Component } from "react";

export default class DemoForm extends Component {
  state={
    user:{
      account:"",
      password:""
    },
    isAuthenticated :false,
  }

  onChangeHandler=(e)=>{
    const {name,value}=e.target ;
    this.setState({
      user:{
        ...this.state.user,
        [name]:value,
      }
    })
    // console.log({
    //   name,
    //   value
    // });
  }

  onSubmitHandler=(e)=>{
    e.preventDefault();
    const {account,password}=this.state.user;
    if(account==="admin" && password==="admin"){
      this.setState({
        isAuthenticated:true,
      })
    }
    // console.log("Submit here")
  }

  onLogOut=()=>{
    this.setState({
      isAuthenticated:false,
      user:{
        account:"",
        password:""
      }
    })

  }
 
  render() {
    if(this.state.isAuthenticated){
      return (
        <div>
          <h1>Hello Im am Cong</h1>
          <button className="btn btn-success" onClick={this.onLogOut}>Log Out</button>
        </div>
      )
    }
    return (
      <div className="container">
        <h1>Demo form</h1>
        <div className="row py-4">
          <form onSubmit={this.onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="account">Account</label>
              <input
                type="text"
                className="form-control"
                name="account"
                id="account"
                aria-describedby="helpId"
                placeholder="account"
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                name="password"
                id="password"
                aria-describedby="helpId"
                placeholder="password"
                onChange={this.onChangeHandler}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
