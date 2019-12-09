import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

/*const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};*/

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
