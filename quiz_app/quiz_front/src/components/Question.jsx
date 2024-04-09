import React, { useState, useEffect } from 'react';
//import axios from "axios";

function FetchQuestion () {
    const [questions, setQuestions] = useState([]);
    
        useEffect(() => {
            fetch('http://127.0.0.1:8000/api/questions') // Assuming your Laravel backend is running on the same server
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    setQuestions(data.results);
                })
                .catch(error => {
                    console.error('Error fetching questions:', error);
                });
        }, []);

        return (
            <div className='app'>
                <h1>Questions</h1>
                <ul>
                    {questions.map(questions => (
                        <li key={questions.id}>
                            <p>{questions.question}</p>
                            <ul>
                                <li>{questions.option1}</li>
                                <li>{questions.option2}</li>
                                <li>{questions.option3}</li>
                                <li>{questions.option4}</li>
                            </ul>
                            <p>Correct Answer: {questions.correct_answer}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
}
export default FetchQuestion;
        // return (
        //     <div className="container">
        //         <h2 className="w-100 d-flex justify-content-center p-3">
        //             React JS Laravel 10 REST API CRUD (Create, Read, Update and
        //             Delete) | Axios Mysql
        //         </h2>
        //         <div className="row">
        //             <div className="col-md-4">
        //                 <h3>Add Your Detail</h3>
        //                 <form onSubmit={handleSubmit} method="post">
        //                     <div className="mb-3 mt-3">
        //                         <label className="form-label">Question</label>
        //                         <input
        //                             type="text"
        //                             className="form-control"
        //                             id="question"
        //                             placeholder="Enter Your Question"
        //                             name="question"
        //                             value={formData.name}
        //                             onChange={handleChange}
        //                         />
        //                     </div>
        //                     <div className="mb-3 mt-3">
        //                         <label className="form-label">Option 1:</label>
        //                         <input
        //                             type="text"
        //                             className="form-control"
        //                             id="option1"
        //                             placeholder="Enter Option 1"
        //                             name="option1"
        //                             value={formData.name}
        //                             onChange={handleChange}
        //                         />
        //                     </div>
        //                     <div className="mb-3 mt-3">
        //                         <label className="form-label">Option 2:</label>
        //                         <input
        //                             type="text"
        //                             className="form-control"
        //                             id="option2"
        //                             placeholder="Enter Option 2"
        //                             name="option2"
        //                             value={formData.name}
        //                             onChange={handleChange}
        //                         />
        //                     </div>
        //                     <div className="mb-3 mt-3">
        //                         <label className="form-label">Option 3:</label>
        //                         <input
        //                             type="text"
        //                             className="form-control"
        //                             id="option3"
        //                             placeholder="Enter Option 3"
        //                             name="option3"
        //                             value={formData.name}
        //                             onChange={handleChange}
        //                         />
        //                     </div>
        //                     <div className="mb-3 mt-3">
        //                         <label className="form-label">Option 4:</label>
        //                         <input
        //                             type="text"
        //                             className="form-control"
        //                             id="option4"
        //                             placeholder="Enter Option 4"
        //                             name="option4"
        //                             value={formData.name}
        //                             onChange={handleChange}
        //                         />
        //                     </div>
        //                     <div className="mb-3 mt-3">
        //                         <label className="form-label">
        //                             Correct Answer:
        //                         </label>
        //                         <input
        //                             type="text"
        //                             className="form-control"
        //                             id="correct_answer"
        //                             placeholder="Enter Correct Answer"
        //                             name="correct_answer"
        //                             value={formData.name}
        //                             onChange={handleChange}
        //                         />
        //                     </div>
        //                     <button
        //                         type="submit"
        //                         className="btn btn-primary"
        //                         onClick={handleSubmit}
        //                     >
        //                         Add Question
        //                     </button>
        //                 </form>
        //             </div>
        //             <div className="col-md-8"></div>
        //         </div>
        //     </div>
        // );
    


// const AddQuestionss = () => {
//     const [formData, setFormData] = useState({
//         question: "",
//         option1: "",
//         option2: "",
//         option3: "",
//         option4: "",
//         correct_answer: "",
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(
//                 'http://127.0.0.1:8000/api/addNewQuetion',
//                 formData
//             );
//             console.log(response.data); // Handle success response
//         } catch (error) {
//             console.error("An error occurred:", error.response); // Handle error response
//         }
//     };

    // return (
    //     <div className="container">
    //         <h2 className="w-100 d-flex justify-content-center p-3">
    //             React JS Laravel 10 REST API CRUD (Create, Read, Update and
    //             Delete) | Axios Mysql
    //         </h2>
    //         <div className="row">
    //             <div className="col-md-4">
    //                 <h3>Add Your Detail</h3>
    //                 <form onSubmit={handleSubmit} method="post">
    //                     <div className="mb-3 mt-3">
    //                         <label className="form-label">Question</label>
    //                         <input
    //                             type="text"
    //                             className="form-control"
    //                             id="question"
    //                             placeholder="Enter Your Question"
    //                             name="question"
    //                             value={formData.name}
    //                             onChange={handleChange}
    //                         />
    //                     </div>
    //                     <div className="mb-3 mt-3">
    //                         <label className="form-label">Option 1:</label>
    //                         <input
    //                             type="text"
    //                             className="form-control"
    //                             id="option1"
    //                             placeholder="Enter Option 1"
    //                             name="option1"
    //                             value={formData.name}
    //                             onChange={handleChange}
    //                         />
    //                     </div>
    //                     <div className="mb-3 mt-3">
    //                         <label className="form-label">Option 2:</label>
    //                         <input
    //                             type="text"
    //                             className="form-control"
    //                             id="option2"
    //                             placeholder="Enter Option 2"
    //                             name="option2"
    //                             value={formData.name}
    //                             onChange={handleChange}
    //                         />
    //                     </div>
    //                     <div className="mb-3 mt-3">
    //                         <label className="form-label">Option 3:</label>
    //                         <input
    //                             type="text"
    //                             className="form-control"
    //                             id="option3"
    //                             placeholder="Enter Option 3"
    //                             name="option3"
    //                             value={formData.name}
    //                             onChange={handleChange}
    //                         />
    //                     </div>
    //                     <div className="mb-3 mt-3">
    //                         <label className="form-label">Option 4:</label>
    //                         <input
    //                             type="text"
    //                             className="form-control"
    //                             id="option4"
    //                             placeholder="Enter Option 4"
    //                             name="option4"
    //                             value={formData.name}
    //                             onChange={handleChange}
    //                         />
    //                     </div>
    //                     <div className="mb-3 mt-3">
    //                         <label className="form-label">
    //                             Correct Answer:
    //                         </label>
    //                         <input
    //                             type="text"
    //                             className="form-control"
    //                             id="correct_answer"
    //                             placeholder="Enter Correct Answer"
    //                             name="correct_answer"
    //                             value={formData.name}
    //                             onChange={handleChange}
    //                         />
    //                     </div>
    //                     <button
    //                         type="submit"
    //                         className="btn btn-primary"
    //                         onClick={handleSubmit}
    //                     >
    //                         Add Question
    //                     </button>
    //                 </form>
    //             </div>
    //             <div className="col-md-8"></div>
    //         </div>
    //     </div>
    // );

