import { Fragment } from "react";
import { Route, Switch } from 'react-router-dom';
import "./App.css";

//components
import Login from "pages/Login";
import Dashboard from "pages/dashboard";

const token = false;

if(!token){
  <Route exact path="/login" component={Login}></Route>
}

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
