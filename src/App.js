import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React, {Component} from "react";
import './App.css';
import DocumentTitle from 'react-document-title'
import Home from "./components/Home";
import CurrntParking from "./components/CurrntParking";
import About from "./components/About";
import Header from "./components/Header";
function App() {
  return (
      <DocumentTitle title = 'ParkingService'>
        <BrowserRouter basename="/" >
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about/">
                <About />
              </Route>
              <Route exact path={`/parking/:id/`}>
                <Header />

                <CurrntParking/>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>

      </DocumentTitle>
  );
}


export default App;
