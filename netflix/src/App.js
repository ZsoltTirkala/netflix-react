import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage"
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Switch>
        <Route path={"/"} exact={true}>
        <Mainpage />
        </Route>
        <Route path={"/details:id"}>
          <DetailsPage />
        </Route>
      </Switch>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
