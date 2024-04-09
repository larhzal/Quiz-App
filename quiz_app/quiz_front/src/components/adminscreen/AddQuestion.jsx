import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
export default function AddQuestion(){

    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [quizId, setQuizId] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            // Fetch CSRF token
            const csrfTokenResponse = await fetch('http://127.0.0.1:8000/csrf-cookie');
            if (!csrfTokenResponse.ok) {
                throw new Error('Failed to fetch CSRF token');
            }
            const { csrf_token } = await csrfTokenResponse.json();
    
            // Make fetch request with CSRF token in headers
            const response = await fetch('http://127.0.0.1:8000/api/addNewQuestion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token // Include CSRF token in the headers
                },
                body: JSON.stringify({
                    question,
                    option1,
                    option2,
                    option3,
                    option4,
                    correct_answer: correctAnswer,
                    id_quiz: quizId
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to add question');
            }
    
            alert('Question added successfully');
    
            // Reset form fields after successful submission
            setQuestion('');
            setOption1('');
            setOption2('');
            setOption3('');
            setOption4('');
            setCorrectAnswer('');
            setQuizId('');
        } catch (error) {
            console.error('Error adding question:', error);
            alert('Failed to add question. Please try again.');
        }
    }

    return(
        <>
    <Sidebar/>
    <div className="form">
                <h2>Add Question</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Question:</label>
                        <input
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Option 1:</label>
                        <input
                            type="text"
                            value={option1}
                            onChange={(e) => setOption1(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Option 2:</label>
                        <input
                            type="text"
                            value={option2}
                            onChange={(e) => setOption2(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Option 3:</label>
                        <input
                            type="text"
                            value={option3}
                            onChange={(e) => setOption3(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Option 4:</label>
                        <input
                            type="text"
                            value={option4}
                            onChange={(e) => setOption4(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Correct Answer:</label>
                        <input
                            type="text"
                            value={correctAnswer}
                            onChange={(e) => setCorrectAnswer(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Quiz ID:</label>
                        <input
                            type="text"
                            value={quizId}
                            onChange={(e) => setQuizId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Add Question</button>
                </form>
            </div>

            <div id="sidebar">
                <nav className="barnav">
                    <div className="top">
                        <h2 className="adminh2">MathScan Quiz</h2>
                    </div>
                    <div className="center">
                        <Link to="/" className="adminlink">
                            Accueil
                        </Link>
                        <Link to="/users" className="adminlink">
                            Utilisateurs
                        </Link>
                        <Link to="/add" className="adminlink">
                            Ajouter une question
                        </Link>
                    </div>
                    <div className="bottom">
                        <Link to="" className="adminlink">
                            Log out
                        </Link>
                    </div>
                </nav>
            </div>

            </>
    )
}