import React from "react";
import { useForm } from "react-hook-form";
import Button from "../common/components/Button";
import InputField from "../common/components/InputField";
import "../common/styles/Card.scss";
import "../common/styles/Forms.scss";
import InputError from "../common/components/InputError";
import { IUserLoginData } from "../interfaces/IAuthentication";

export default function Login(props:any) {
    const { register, formState:{ errors }, handleSubmit } = useForm();

    // Make API call, process and redirect here
    const formSubmit = (data:IUserLoginData) => {
        localStorage.setItem('email', data.email);
        props.history.push("/") // Redirect to home page
    }

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
