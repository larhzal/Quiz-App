import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../navbar/Navbar';
import FetchQuestion from './QuizzQuestion';

function QuizComponent() {
    const [quizzes, setQuizzes] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/quiz')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setQuizzes(data.results);
            })
            .catch(error => {
                console.error('Error fetching quizzes:', error);
            });
    }, []);

    const handleQuizClick = (quizId) => {
      //  navigate(`/questions`);
    };
    
    // if (quizzes.length === 0) {
    //     return <div>Loading quizzes...</div>;
    // }
    
    return (
        <>
            <Navbar />
            <h1 className='cat-h1'>Choisissez la categorie de quiz que vous souhaitez</h1>
            <div className='quizzcontainer'>
                {quizzes.map((quiz, index) => (
                    <div className='quiz-categorie' key={index} onClick={() => handleQuizClick(quiz.id)}>
                        <h2>{quiz.id}.{quiz.description}</h2>
                        {/* <FetchQuestion categoryId={quiz.id} /> */}
                        
                    </div>
                ))}
            </div>
        </>
    );
}

export default QuizComponent;
