import axios from "axios";
import { IAuthService, IUserLoginData } from "../interfaces/IAuthentication";

export const AuthService:IAuthService = {
    // IGNORE
    authenticate(userData:IUserLoginData): boolean {
      let isAuthenticated = false;
      axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`, {
        email: userData.email,
        password: userData.password,
        returnSecureToken: true
      })
      .then((response) => {
        console.log(response);
        // success
        isAuthenticated = true;
        return response
      })
      .catch((error) => {
        console.log(error);
      });
      return isAuthenticated;
    },
  
    login() {
      return localStorage.getItem('email') ? true : false;
    }
}
