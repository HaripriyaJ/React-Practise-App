import React from 'react';
import Login from './components/Login';
import {
  Route,
  Switch
} from "react-router-dom";
import Home from './common/components/Home';
import PrivateRoute from './common/components/PrivateRoute';

function App() {
  return (
      <Switch>
        <PrivateRoute path="/home">
          <Home></Home>
        </PrivateRoute>
        <Route path="/login" component={Login}/>
      </Switch>
  );
}

export default App;
