import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../common/components/Button";
import InputField from "../common/components/InputField";
import "../common/styles/Card.scss";
import "../common/styles/Forms.scss";
import { IUserLoginData } from "../apis/Authentication";
import InputError from "../common/components/InputError";

export default function Login() {
    const [isAuthenticated, setAuthentication] = useState(false);
    const { register, formState:{ errors }, handleSubmit } = useForm();

    const formSubmit = (data:IUserLoginData) => {
        setAuthentication(true)
        localStorage.setItem('email', data.email);
        // Make API call, process and redirect here
    }

    if (isAuthenticated) return <Redirect to="/home"/>
    
    return (
      <div className="card">
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <InputField
              {...register("email", { required:true, pattern: /\S+@\S+\.\S+/ })}
              label="Email"
              type="email"
              placeholder=""
              width="90%"
          ></InputField>
          {errors.email?.type === 'required' && <InputError message="Email is required"/>}
          {errors.email?.type === 'pattern' && <InputError message="Invalid email format"/>}

         <InputField
              {...register("password", { required:true, minLength: 8 })}
              label="Password"
              type="password"
              placeholder=""
              width="90%"
          ></InputField>
          {errors.password?.type === 'required' && <InputError message="Password is required"/>}
          {errors.password?.type === 'minLength' && <InputError message="Password must be min. 8 characters long"/>}

          <div className="form-button__wrapper">
            <Button title="Login" type="submit" isRounded={true}></Button>
          </div>
        </form>
      </div>
    );
}
