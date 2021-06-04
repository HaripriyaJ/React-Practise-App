import React from 'react';
import Login from './components/Login';
import {
  Route,
  Switch
} from "react-router-dom";
import Home from './common/components/Home';
import PrivateRoute from './common/components/PrivateRoute';
import PageNotFound from './common/components/PageNotFound';

function App() {
  // Note: Specify more specific routes first and general routes towards the end
  return (
      <Switch>
        <PrivateRoute path="/home">
          <Home/>
        </PrivateRoute>
        <Route path="/login" component={Login} exact={true}/>
        <Route path="**" component={PageNotFound}/> {/* Wildcard route*/}
      </Switch>
  );
}

export default App;
