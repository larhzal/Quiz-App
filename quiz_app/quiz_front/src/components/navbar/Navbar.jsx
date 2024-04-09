import React from "react";
import MathscanLogo from '../../assets/MathscanQuizf.png';
import {Link} from 'react-router-dom';
import './navbar.css';

export default function Navbar(){
    return(
            <>
                <nav>
                    <div className="logo">
                        <img src={MathscanLogo} alt="" />
                    </div>
                    <div className="navigation">
                            <Link to="/" className="navlink">Accueil</Link>
                            <Link to="/quiz" className="navlink">Quizzes</Link>
                            <Link to="/questions" className="navlink">Questions</Link>
                            <Link to="/users" className="navlink">Admin</Link>
                    </div>
                    <div className="account">
                            {/* <a href="">Login</a>
                            <button><a className="singup" href="">Sing-Up</a></button> */}
    
                            <Link to="/Login" className="navlink">Login</Link>
                            <Link to="/Signup" className="signup">Sign-Up</Link>
                    </div> 
                </nav>  
            </>     
    )
}