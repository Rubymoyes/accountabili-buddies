import React from "react";
import {Link} from 'react-router-dom';
import questions from '../../data/data'


let Questions = () => {
console.log(questions(question))

    return (
        <div>
        <h2>Question:</h2>

        <ul>
        {Object.keys(questionsList).map(questions) => {
return <li key={questions}
        }}

        </ul>

        </div>

    );




}

export default Questions