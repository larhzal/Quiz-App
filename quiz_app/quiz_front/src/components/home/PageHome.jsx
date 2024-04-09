import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './homepage.css'
import QuizChild from '../../assets/quizChild-transformed.png';

export default function HomePage(){
    return (
        <>
        
           <body id="body">
                <Navbar></Navbar>
                <div className="container">
                    <div className="text">
                        <p id='first'>Nous vous accueillons dans notre application de quiz mathématiques!</p>
                        <p id='second'>Soyez prêt à faire de l'apprentissage une expérience captivante grâce à nos quiz interactives.Nous avons abordé toutes les questions allant 
                            de l'arithmétique de base aux équations d'inclinaison de l'esprit.</p>
                        <p id='third'>Venez nous rejoindre et redécouvrez les mathématiques amusantes à nouveau!
                        </p>
                        <div className="button">
                        {/* <button><a className="singup2" href="">Sing-Up</a></button> */}
                        {/* <button><Link to="/LoginSignup" className='link'>Sing-Up</Link></button> */}
                        <Link to="/questions" className='link'>Commenser!</Link>
                    </div>
                </div>
                <img className='quizchild' src={QuizChild} alt="" />
                </div>
           </body>
        </>
    )
}
