import React, { useState, useEffect } from "react";
import axios from "axios";

function Question() {
    const [questionField, setQuestionField] = useState({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correct_answer: "",
    });

    // useEffect(() => {
    //     // Fetch CSRF token from meta tag
    //     const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
    //     // Set CSRF token globally for all Axios requests
    //     axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    // }, []);

    

    const changeQuestionFieldHandler = (e) => {
        setQuestionField({
            ...questionField,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitChange = async (e) => {
        e.preventDefault();
        axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
        try {
            const response = await axios.post(
                "/addNewQuetion/",questionField);
            console.log(response);
        } catch (err) {
            console.log("Something Wrong:", err);
        }
    };

    return (
        <div className="container">
            <h2 className="w-100 d-flex justify-content-center p-3">
                React JS Laravel 10 REST API CRUD (Create, Read, Update and
                Delete) | Axios Mysql
            </h2>
            <div className="row">
                <div className="col-md-4">
                    <h3>Add Your Detail</h3>
                    <form>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Question</label>
                            <input
                                type="text"
                                className="form-control"
                                id="question"
                                placeholder="Enter Your Question"
                                name="question"
                                onChange={changeQuestionFieldHandler}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Option 1:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="option1"
                                placeholder="Enter Option 1"
                                name="option1"
                                onChange={changeQuestionFieldHandler}
                                required
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Option 2:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="option2"
                                placeholder="Enter Option 2"
                                name="option2"
                                onChange={changeQuestionFieldHandler}
                                required
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Option 3:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="option3"
                                placeholder="Enter Option 3"
                                name="option3"
                                onChange={changeQuestionFieldHandler}
                                required
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Option 4:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="option4"
                                placeholder="Enter Option 4"
                                name="option4"
                                onChange={changeQuestionFieldHandler}
                                required
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">
                                Correct Answer:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="correct_answer"
                                placeholder="Enter Correct Answer"
                                name="correct_answer"
                                onChange={changeQuestionFieldHandler}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={onSubmitChange}
                        >
                            Add Question
                        </button>
                    </form>
                </div>
                <div className="col-md-8"></div>
            </div>
        </div>
    );
}

export default Question;
