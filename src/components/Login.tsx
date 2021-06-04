import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "../common/components/Button";
import InputField from "../common/components/InputField";
import "../common/styles/Card.scss";
import "../common/styles/Forms.scss";

const checkEmailValidity = (email:string): boolean => {
    return /\S+@\S+\.\S+/.test(email) ? true : false;
}

const checkPasswordValidity = (password:string):boolean => {
    return password.length > 8 ? true : false;
}

function Login() {
    const [email, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setAuthentication] = useState(false);

    const formValidation = (fieldName:string, fieldValue:string) => {
        fieldName === "email" ?  setUserName(fieldValue) : setPassword(fieldValue);
    }

    const formSubmit = (event:any) => {
        event.preventDefault();
        if (email && checkEmailValidity(email)) {
            password && checkPasswordValidity(password) ? login() : alert("Password too short");
        }
        else alert("Invalid email");
    }

    const login = () =>  {
      setAuthentication(true)
      localStorage.setItem('email', email);
      // Make API call, process and redirect here
    }

    if (isAuthenticated) return <Redirect to="/home"/>
    

    return (
      <div className="card">
        <form className="form" onSubmit={formSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <InputField
              name="email"
              type="email"
              placeholder=""
              width="90%"
              onChange={(event) => formValidation(event.target.name, event.target.value)}
              value={email}
            ></InputField>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <InputField
              name="password"
              type="password"
              placeholder=""
              width="90%"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            ></InputField>
          </div>
          <div className="form-button__wrapper">
            <Button title="Login" type="submit" isRounded={true}></Button>
          </div>
        </form>
      </div>
    );
}
export default Login;