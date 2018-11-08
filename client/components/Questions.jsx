import React from "react";
import { Link } from 'react-router-dom';
import questions from '../../data/data'

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

export default Questions