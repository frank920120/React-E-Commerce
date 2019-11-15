import React from "react";
import HomePage from "./pages/homepage/homepage.componet";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
