import React from 'react';
import Login from './components/Login';
import { Redirect, Route, Switch } from "react-router-dom";
import Home from './common/components/Home';
import PrivateRoute from './common/components/PrivateRoute';
import PageNotFound from './common/components/PageNotFound';
import { AuthService } from './apis/Authentication';

function App() {
  // Note: Specify more specific routes first and general routes towards the end
  return (
      <Switch>

        <PrivateRoute path="/home"><Home/></PrivateRoute>

        {/* Redirect user to home page onload by default if user is logged in */}
        <Route path="/login" exact={true} render={(props) => {
          return AuthService.login() === true ? <Redirect to="home"/> : React.createElement(Login, {...props})
        }}
        />

        <Route path="/page-not-found-404" component={PageNotFound}/>

        {/* Redirects user to login page onload by default if user is not logged in (or)
            Redirects user to page-not-found page if user tries to access illegal routes (or)
            Redirect user to home page onload by default if user is logged in
        */}
        <Route path="/" render={(props) => {
            const { location } = props;
            if (AuthService.login() === true) return location.pathname === '/home' || location.pathname === '/' ? <Redirect to='/home' /> : <Redirect to='/page-not-found-404' />
            else return location.pathname === '/' ? <Redirect to='/login' /> : <Redirect to='/page-not-found-404' />
          }
        } /> {/* Wildcard route*/}
      </Switch>
  );
}

export default App;
