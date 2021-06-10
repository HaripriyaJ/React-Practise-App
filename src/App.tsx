import React from 'react';
import Login from './components/Login';
import { Redirect, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import PrivateRoute from './common/components/PrivateRoute';
import PageNotFound from './common/components/PageNotFound';
import { AuthService } from './apis/Authentication';

function App() {
  // Note: Specify more specific routes first and general routes towards the end
  return (
      <Switch>

        {/* Redirect user to home page onload by default if user is logged in */}
        <Route exact path="/login" render={(props) => {
            return AuthService.login() === true ? <Redirect to="/" /> : React.createElement(Login, {...props})
          }}
        />

        <PrivateRoute exact path="/"><Home/></PrivateRoute>

        {/* Redirects user to login page onload by default if user is not logged in (or)
            Redirects user to page-not-found page if user tries to access illegal routes (or)
            Redirect user to home page onload by default if user is logged in
        */}
        <Route path="*" component={PageNotFound}/> {/* Wildcard route*/}
      </Switch>
  );
}

export default App;
