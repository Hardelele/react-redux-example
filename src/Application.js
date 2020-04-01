import React from 'react';
import './css/application.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Registration} from "./components/Registration";
import {Auth} from "./components/Auth";
import {Header} from "./components/Header";
import {Todos} from "./components/Todos";

function Application() {
  return (
      <BrowserRouter>
        <div className="main-application-container">
            <Header/>
            <Switch>
                <Route path="/register" exact component={Registration}/>
                <Route path="/auth" component={Auth}/>
                <Route path="/todos" component={Todos}/>
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default Application;
