import React, { useState } from "react";
import Button from "../common/components/Button";
import InputField from "../common/components/InputField";
import "../common/styles/Card.css";
import "../common/styles/Forms.css";

const checkEmailValidity = (email:string): boolean => {
    return /\S+@\S+\.\S+/.test(email) ? true : false;
}

const checkPasswordValidity = (password:string):boolean => {
    return password.length > 8 ? true : false;
}

function Login() {
    const [email, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const formValidation = (fieldName:string, fieldValue:string) => {
        fieldName === "email" ?  setUserName(fieldValue) : setPassword(fieldValue);
    }

    const loginSubmit = (event:any) => {
        event.preventDefault();
        if (email && checkEmailValidity(email)) {
            password && checkPasswordValidity(password) ? alert("Login successful") : alert("Password too short");
        }
        else alert("Invalid email");
    }

    return (
      <div className="card">
        <form onSubmit={loginSubmit}>
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