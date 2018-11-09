import React from "react";
import Home from "./Home";
import { HashRouter as Router, Route } from "react-router-dom";
import {Link} from "react-router-dom";
import Questions from "./Questions";
import Profile from "./Profile";
import inputForm from "./Forms";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <h1>
          Welcome to Accountabilibuddies - The 1# Survey and Forum Website!
        </h1>

        <Route exact path="/" component={Home} />
        <Route exact path="/survey" component={Questions} />
        <Route exact path="/form" component={inputForm} />
        
      </React.Fragment>
    </Router>
  );
};

export default App;
