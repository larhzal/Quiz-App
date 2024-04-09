import "../quizz/quizz.css";
import React, { useState, useEffect } from 'react';
import Navbar from "../navbar/Navbar";
import { useParams } from 'react-router-dom';

function FetchQuestion({ categoryId }){
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    // useEffect(() => {
    //     if (!categoryId) return;

    //     fetch(`http://127.0.0.1:8000/api/questions/${categoryId}`)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             setQuestions(data.results);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching questions:', error);
    //         });
    // }, [categoryId]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/questions')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setQuestions(data.results);
                setLoading(false); // Set loading to false after fetching questions
            })
            .catch(error => {
                console.error('Error fetching questions:', error);
            });
    }, []);

   
    const handleAnswerClick = (selectedOption, correctAnswer, e) => {
        setSelectedAnswer(selectedOption);
    
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = true;
        });
    
        if (selectedOption === correctAnswer) {
            e.target.style.backgroundColor = "rgb(47, 160, 47)";
            setScore(score + 1);
        } else {
            e.target.style.backgroundColor = "rgb(204, 55, 55)";
            document.querySelectorAll('.answer-btn').forEach(btn => {
                if (btn.textContent === correctAnswer) {
                    btn.style.backgroundColor = "rgb(47, 160, 47)";
                }
            });
        }
    };
    


    const handleNextBtn = () => {
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = false;
        });
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.style.backgroundColor = "";
        });
    
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null); 
        } else {
            setQuizFinished(true);
        }
    };
    
    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setQuizFinished(false);
    };

    

    if (loading) {
        return <p className="loading">Loading...</p>;
    }

    if (quizFinished) {
        return (
            <div className='quizzcontainer'>
                <div className="restart-quizz">
                    
                <h2>Félicitations! Vous avez terminé le quiz!</h2>
                <h3>Vos score est {score}/{questions.length}</h3>
                <button className="restart-btn" onClick={handleRestartQuiz}>Restart Quiz</button>
                    
                </div>
            </div>
        );
    }



    return(
        <>

        <Navbar/>

        <div className='quizzcontainer'>
            <div className="quizz">
            <h1>.{questions[currentQuestionIndex].question}</h1>
                    <div className="answers">
                    <button className="answer-btn" onClick={(e) => handleAnswerClick(questions[currentQuestionIndex].option1, questions[currentQuestionIndex].correct_answer, e)}>{questions[currentQuestionIndex].option1}</button>
                    <button className="answer-btn" onClick={(e) => handleAnswerClick(questions[currentQuestionIndex].option2, questions[currentQuestionIndex].correct_answer, e)}>{questions[currentQuestionIndex].option2}</button>
                    <button className="answer-btn" onClick={(e) => handleAnswerClick(questions[currentQuestionIndex].option3, questions[currentQuestionIndex].correct_answer, e)}>{questions[currentQuestionIndex].option3}</button>
                    <button className="answer-btn" onClick={(e) => handleAnswerClick(questions[currentQuestionIndex].option4, questions[currentQuestionIndex].correct_answer, e)}>{questions[currentQuestionIndex].option4}</button>
                    </div>
                    <div className="question-number">
                          Question {currentQuestionIndex + 1}/{questions.length}
                    </div>
                    <button className="next-btn" onClick={handleNextBtn}>Next</button>
            </div>
        </div>
       

        </>
    )
}

export default FetchQuestion;