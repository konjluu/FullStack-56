import React, { useState } from "react";

const initialState={
  email : "",
  password:"",
};

const Login =(props)=>{
  const [formValue,setFormValue]=useState(initialState);

  const onFormValueChange=(e)=>{
    const {value,name}=e.target;
    setFormValue({
      ...formValue,
      [name]:value,
    });
  }

  const onFormSubmit=(e)=>{
    e.preventDefault();
    props.onLogIn(formValue);
  }

  return(
    <div
      className="mt-5"
      style={{
        height: 2000,
      }}
    >
      <h3 className="display-4">Log in form</h3>
      <form onSubmit={onFormSubmit}>
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={onFormValueChange}
            value={formValue.email}
          />
        </div>
        <div className="form-item">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="text"
            name="password"
            id="password"
            onChange={onFormValueChange}
            value={formValue.password}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Log in
        </button>
      </form>
    </div>

  )
}

export default Login;