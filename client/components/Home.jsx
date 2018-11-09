//used the template from taz and i's taxonomic nav page
import { Link } from "react-router-dom";
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom"; //obviously shouldnt be link, not sure what else to put in there

const Home = () => {
  return (
    // below this have just put in a basic form for log in and sign up, have not tailored it to react
    //not sure what the action tag needs to be filled with so have left it with the generic one from w3 schools
    <div>
      <div className="landingpagebg" id="bigThing">
        <div className="header topPart" />

        <h2>Log in</h2>

        <form method="get">
          <fieldset>
            <legend>Log in:</legend>
            <p>Email address:</p>
            <input type="text" name="Email" />
            <br />
            <p>Password:</p>
            <input type="password" name="Password" value="" />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </fieldset>
        </form>

        <h2>Sign up</h2>

        {/* // not sure what the action section relates to */}
        <form action="/action_page.php" method="post">
          <fieldset>
            <legend>Sign Up:</legend>
            <p>Email address:</p>
            <input type="text" name="Email" value="" />
            <br />
            <p>Password:</p>
            <input type="password" name="Password" value="" />
            <br />
            <br />
            <p>Repeat Password:</p>
            <input type="password" name="Password" value="" />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
        <ul>
          <li>
            <Link to={"/survey"}>Questions Page</Link>
          </li>
        </ul>
        <div className="footer bottomPart">
          <p>Bobbi, Ruby, Joan and Brandon 2018 </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
