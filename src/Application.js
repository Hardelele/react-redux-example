import React from 'react';
import './css/application.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Registration} from "./components/Registration";
import {Auth} from "./components/Auth";
import {Header} from "./components/Header";

function Application() {
  return (
      <BrowserRouter>
        <div className="main-application-container">
            <Header/>
            <Switch>
                <Route path="/register" exact component={Registration}/>
                <Route path="/auth" component={Auth}/>
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default Application;
