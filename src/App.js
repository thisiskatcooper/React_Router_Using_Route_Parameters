import React from "react";
import { Route, Link, Switch, useParams } from "react-router-dom";
import UserProfile from "./UserProfile";

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <Link to="/user/new">New User</Link>
      {Array(10)
        .fill()
        .map((ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`} data-testid={`user-${id}`}>
              User{id}
            </Link>
          </div>
        ))}
      
        <Switch>
          
        <Route exact path="/user/new">
           <h1>Unable to create a new user</h1>
          </Route>
          
        <Route path="/user/:userId">
          <UserProfile />
          </Route>
          
          <Route>
            <h1>404 Not Found</h1>
          </Route>
          
          </Switch>
    </div>
  );
}

export default App;
