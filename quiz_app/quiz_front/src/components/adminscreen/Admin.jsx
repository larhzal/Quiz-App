import { Link } from "react-router-dom";
import "../adminscreen/Admin.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Admin() {

    return (
        <>
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
                        <Link to="" className="adminlink">
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
    );
}