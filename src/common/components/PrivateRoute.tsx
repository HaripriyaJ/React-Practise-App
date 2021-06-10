import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PageNotFound from './PageNotFound';

function PrivateRoute (props:any) {
    const {children, location, computedMatch, ...rest } = props;
    const { loggedIn } = useSelector((state: RootStateOrAny) => state.login);
    
    return (
      <Route {...rest} render={() => {
        // To avoid matching with home/{something_gibberish}
        if (loggedIn) return location.pathname ===  computedMatch.path ? children : <PageNotFound />
        else return <Redirect to={{pathname: '/login', state: {from: props.location}}} /> // Redirect back to page from which login was triggered
      }} />
    );
}
export default PrivateRoute;