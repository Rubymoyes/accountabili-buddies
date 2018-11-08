import React from "react";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <React.Fragment>

    <h1>Welcome to Accountabilibuddies - The 1# Survey and Forum Website!</h1>

    {/* <Router path = '/' component = {Home} /> */}
    <Router path = '/survey' component = {Questions} />


    </React.Fragment>
    </Router>

  );
};

export default App;
