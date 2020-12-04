import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Switch>
        <Route path={"/"} exact={true}>
        <Mainpage />
        </Route>
      </Switch>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
