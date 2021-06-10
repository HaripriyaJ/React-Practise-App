import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthService } from '../../apis/Authentication';
import PageNotFound from './PageNotFound';

function PrivateRoute (props:any) {
  console.log(props)
    const {children, location, computedMatch, ...rest } = props;
    return (
      <Route {...rest} render={() => {
        // To avoid matching with home/{something_gibberish}
        if (AuthService.login() === true) return location.pathname ===  computedMatch.path ? children : <PageNotFound />
        else return <Redirect to={{pathname: '/login', state: {from: props.location}}} /> // Redirect back to page from which login was triggered
      }} />
    );
}
export default PrivateRoute;