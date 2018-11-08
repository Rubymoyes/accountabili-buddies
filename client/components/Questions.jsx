import React from "react";

import { Link } from 'react-router-dom';
import questions from '../../data/data'

import { HashRouter as Router, Route } from "react-router-dom"; 

const mapTarget = questions.questions

let Questions = () => {
    console.log(mapTarget)


    return (
        <div>
            <h2>Question:</h2>

            <ul>
                {mapTarget.map(
                    (oneQuestion) => {
                        console.log(oneQuestion)
                        return (
                            <li> {oneQuestion.question}</li>
                        );
                    }
                )}
            </ul>

        </div>

    );




}





const Profile = () => {
  return (
    // below this have just put in a basic form for log in and sign up, have not tailored it to react
    //not sure what the action tag needs to be filled with so have left it with the generic one from w3 schools
    <div>
      <head>
        <title>Accountabili-Buddies</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="./question.css" rel="stylesheet" />
      </head>

      <body>
        <div class="header">
          <h2>Accountabili-Buddies</h2>
        </div>
        <p>Survey page</p>
      </body>

      <div class="footer">
        <p>Bobbi, Ruby, Joan and Brandon 2018 </p>
      </div>
    </div>
  );
};

export default Questions

