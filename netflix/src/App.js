import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/main"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Switch>
        <Route path={"/"} exact={true}>
        <Main />
        </Route>
      </Switch>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
