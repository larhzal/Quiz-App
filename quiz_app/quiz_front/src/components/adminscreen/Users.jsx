import Sidebar from "./Sidebar";
import '../adminscreen/Admin.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
    const [users, setUsers] = useState([]);

    const showUser = () => {
        fetch('http://127.0.0.1:8000/api/user') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data.results);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    };

    // useEffect to fetch user data when component mounts
    useEffect(() => {
        showUser();
    }, []);

    return (
        <>
            <Sidebar />
            <div className="users">
                <h3>Users</h3>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>E-mail</th>
                            <th>Crée à</th>
                            <th>Modifié à</th>
                            {/* Add more columns as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.created_at}</td>
                                <td>{user.updated_at}</td>
                                {/* Add more cells for additional user data */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
