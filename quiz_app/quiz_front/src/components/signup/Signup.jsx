import React, { useState } from "react";
import '../signup/signup.css';
import imgemail from '../../assets/email.png';
import imgpassword from '../../assets/password.png';
import imgperson from '../../assets/person.png';
import { Link } from 'react-router-dom';

export default function Signup(){
    return(
        <>
            <form action="">
            <div className='body'>
            <div className="Logcontainer">
                <div className="header">
                    <div className="Logtext">Sign-up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={imgperson} alt="" />
                        <input type="text" name="" id="" placeholder="Nom" />
                    </div>
                    <div className="input">
                        <img src={imgemail} alt="" />
                        <input type="email" name="" id="" placeholder="E-mail"/>
                    </div>
                    <div className="input">
                        <img src={imgpassword} alt="" />
                        <input type="password" name="" id="" placeholder="Mot de pass"/>
                    </div>
                </div>
                <div className="submit-container">
                    {/* Toggle the 'action' state when clicked */}
                    <button className="submit" id="sign2"><Link to="/signup" className='signlink2'>Sign up</Link></button>
                    <button className="submit" id="login2"><Link to="/login" className='loglink2'>Login</Link></button>
                    {/* <div className="submit" id="sign2">Sign up</div>
                    <div className="submit" id="login2">Login</div> */}
                </div>
            </div>
        </div>
            </form>
        </>
    )
}