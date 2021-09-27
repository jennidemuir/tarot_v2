import "./";
import { HomePage } from "./Pages/HomePage/HomePage";
import { HashRouter, Switch, Route, Link, Redirect } from "react-router-dom";

import CardLibrary from "./Pages/CardLibrary/CardLibrary";
import Oracle from "./Pages/Oracle/Oracle";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <HashRouter basename="/">
      {/* <div className="App">
        <HomePage />
      </div> */}
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/library">
          <CardLibrary />
        </Route>
        <Route exact path="/oracle">
          <Oracle />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
