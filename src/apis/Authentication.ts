import axios from "axios";
import { RemoveFromLS, StoreToLS } from "../common/services/LocalStorageOperations";
import { loginActions } from "../configs/actions/Login";
import { IUserLoginData } from "../interfaces/IAuthentication";

const Authenticate = (userData:IUserLoginData) => async (dispatch: any) => {
  try {
      const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`, {
        email: userData.email,
        password: userData.password,
        returnSecureToken: true
      });

      LoginSuccess(res.data.email);
      dispatch({
        type: loginActions.LOGIN_SUCCESS,
        payload: res.data.email
      });
  }
  catch (error) {
      dispatch({
        type: loginActions.LOGIN_FAILURE,
        payload: error.response.data,
      });
  }
}

const LoginSuccess = (email: string) => {
  StoreToLS('email', email);
}

const Logout = () => {
  RemoveFromLS('email');
  window.location.reload();
}

export const AuthService = { Authenticate, Logout }