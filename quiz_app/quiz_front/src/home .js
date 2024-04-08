import React, { useState } from 'react';
import axios from 'axios';

const Home = () =>{

    const [questionField, setquestiobField] = useState({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correct_answer: ""
    });
 
    const changeQuestionFieldHandler = (e) => {
        setquestiobField({
            ...questionField,
            [e.target.question]: e.target.value
        });
        //console.log(userField);
 
    }
    const [loading,setLoading]=useState()
 
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const responce= await axios.post("http://127.0.0.1:8000/api/addNewQuestion", questionField);
            console.log(responce)
            setLoading(true);
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    if(loading){
        return <Home/>
    }
    
    return(
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center p-3'>React JS Laravel 10 REST API CRUD (Create, Read, Update and Delete) | Axios Mysql</h2>
                <div className='row'>
                    <div className='col-md-4'>
                        <h3>Add Your Detail</h3>
                        <form>
                            <div className="mb-3 mt-3">
                                <label className="form-label"> Full Name:</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" name="name" onChange={e => changeQuestionFieldHandler(e)} />
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={e => changeQuestionFieldHandler(e)} required/>
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Password:</label>
                                <input type="text" className="form-control" id="password" placeholder="Enter password" name="password" onChange={e => changeQuestionFieldHandler(e)} required/>
                            </div>
                             
                            <button type="submit" className="btn btn-primary" onClick={e => onSubmitChange(e)}>Add User</button>
                        </form>
                    </div>
                    <div className='col-md-8'>
                        <List />
                    </div>
                </div>
        </div>
    )
}