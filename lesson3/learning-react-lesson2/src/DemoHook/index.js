import {useEffect, useState} from 'react'
import Login from "./Login"
import HomePage from "./HomePage"

const Deafault_email= "admin@gmail.com";
const Deafault_password="admin";

const DemoHook = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogIn=(value)=>{
    const {email,password}=value;
    if(email===Deafault_email && password===Deafault_password){
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated",true);
    }
  }

  const onLogOut=()=>{
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  }

  useEffect(()=>{
    if(localStorage.getItem("isAuthenticated")){
      setIsAuthenticated(true);
    }
  },[]);
  
  return (
    <div className='container'>
      {!isAuthenticated ? 
      <Login onLogIn={onLogIn}/> 
      : 
      <HomePage onLogOut={onLogOut} />}
    </div>
  )
}

export default DemoHook;
