import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, isLoggedIn, loginCheck }) => {
  return (
    <Route>
      {() =>
        isLoggedIn ? children : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRoute;