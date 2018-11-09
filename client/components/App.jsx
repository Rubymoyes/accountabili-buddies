import React from "react";
import Home from "./Home";
import { HashRouter as Router, Route } from "react-router-dom";
import {Link} from "react-router-dom";
import Questions from "./Questions";
import Profile from "./Profile";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <h1>
          Welcome to Accountabilibuddies - The 1# Survey and Forum Website!
        </h1>

        <Route path="/" component={Home} />
        <Route path="/survey" component={Questions} />
      </React.Fragment>
    </Router>
  );
};

export default App;
