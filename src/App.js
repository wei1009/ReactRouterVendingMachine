import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import FreshSardines from "./FreshSardines";
import Soda from "./Soda";
import Chips from "./Chips";

function App() {
  return (
    <main>
      <BrowserRouter>
      <Switch>
      <Route exact path="/">
      <Home/>
        </Route>
        <Route exact path="/FreshSardines">
          <FreshSardines />
        </Route>
        <Route exact path="/Chips">
          <Chips />
        </Route>
        <Route exact path="/Soda">
          <Soda />
        </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}
// end

export default App;
