import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthService } from '../../apis/Authentication';

function PrivateRoute (props:any) {
    const {children, ...rest } = props;
    return (
      <Route {...rest} render={() => {
        return AuthService.isAuthenticated === true
          ? children
          : <Redirect to='/login' />
      }} />
    );
}
export default PrivateRoute;