import { useState } from "react";
import { NavLink } from "react-router-dom";
import TelevisionTrivvyData from "../components/TelevisionTrivvyData";
import "./Trivvy.css";

function TelevisionTrivvy() {

    let questions = TelevisionTrivvyData;

    // Question Randomizer
    // questions = questions.sort(() => Math.random() - 0.5)

    const [showResults, setResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [alertCorrect, showAlertCorrect] = useState("");
    const [alertIncorrect, showAlertIncorrect] = useState("");

    function clicked(isCorrect) {

        if (isCorrect) {
            showAlertCorrect("Correct!");
        } else {
            showAlertIncorrect("Incorrect");
        }

        setTimeout(() => {
            if (isCorrect) {
                setScore(score + 1);
            }

            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1);
                showAlertCorrect("");
                showAlertIncorrect("");
            } else {
                setResults(true);
                showAlertCorrect("");
                showAlertIncorrect("");
            }
        }, 2000);

    }

    function restartGame() {
        setScore(0);
        setCurrentQuestion(0);
        setResults(false);
    }

    return (
        <div className="musicTrivvy trivvyContainer">
            {/* Navigation */}
            <div className="trivvyNav">
                <NavLink to="/music"><i className="trivvyIcon fa-solid fa-music" title="Music"></i></NavLink>
                <NavLink to="/game"><i className="trivvyIcon fa-solid fa-gamepad" title="Game"></i></NavLink>
                <NavLink to="/film"><i className="trivvyIcon fa-solid fa-film" title="Film"></i></NavLink>
                <NavLink to="/television"><i className="trivvyIcon fa-solid fa-tv" title="TV"></i></NavLink>
                <NavLink to="/animal"><i className="trivvyIcon fa-solid fa-cat" title="Animal"></i></NavLink>
            </div>

            {/* Header */}
            <h1 className="trivvyHeader">TELEVISION <span className="tag">TRIVVY!</span></h1>

            {/* Score */}
            <h2 className="trivvyScore">Score: <span className="ding">{score}</span></h2>

            {/* Alert */}
            <h2 className="alertCorrect">{alertCorrect}</h2>
            <h2 className="alertIncorrect">{alertIncorrect}</h2>

            {showResults

                ?

                /* Results Card */
                <div className="resultsCard">
                    <h2>Final Results</h2>
                    <h3>{score} out of {questions.length} correct ({(score / questions.length) * 100}%)</h3>
                    <button onClick={() => restartGame()}>RESTART GAME</button>
                </div>

                :

                /* Trivvy Card */
                <div className="trivvyCard">
                    <h2>Question {currentQuestion + 1} of {questions.length}</h2>
                    <h3>{questions[currentQuestion].text}</h3>
                    <ul>
                        {questions[currentQuestion].options.map((options) => {
                            return (
                                <li onClick={() => clicked(options.isCorrect)} key={options.id}>{options.text}</li>
                            );
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}

export default TelevisionTrivvy;