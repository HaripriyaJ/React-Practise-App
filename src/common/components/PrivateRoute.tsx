import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthService } from '../../apis/Authentication';

function PrivateRoute (props:any) {
    const {children, location, computedMatch, ...rest } = props;
    return (
      <Route {...rest} render={() => {
        // To avoid matching with home/{something_gibberish}
        if (AuthService.login() === true) return location.pathname ===  computedMatch.path ? children : <Redirect to='/page-not-found-404' />
        else return <Redirect to='/login' />
      }} />
    );
}
export default PrivateRoute;