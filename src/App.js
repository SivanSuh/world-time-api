import React from "react";
import City from "./Components/City";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Time from "./Components/Time";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={City} />
          <Route path="/:continent/:place" component={Time} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
