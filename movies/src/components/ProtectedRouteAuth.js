import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRouteAuth = ({ component: Component, ...props  }) => {
  return (
    <Route>
      {
        () => !props.loggedIn ? <Component {...props}/> : <Redirect to="/movies"/>
      }
    </Route>
)}

export default ProtectedRouteAuth;