import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () =>{

    const [users, setUser] = useState([]);

    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers = async ()=>{
        const result = await axios.get("https://gorest.co.in/public/v1/users");
        //console.log(result.data.data);
        setUser(result.data.data.reverse());
    }

    const deleteUser = async id => {
    // await axios.delete(`https://gorest.co.in/public/v1/users/${id}`);
        
        const token = 'cc5a0ad77e570d9c768956d17bb467b777588ea1bcd3a5929eaa3d1282a90f72'
        await axios.delete(`https://gorest.co.in/public/v1/users/${id}`,{
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json',
            Authorization: 'Bearer ' + token
        
        }});
        loadUsers();
    }
    return(
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) =>(
                            <tr key={user.id}>
                                <th scope="row">{index +1} </th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>
                                        Edit
                                    </Link>
                                    <a className="btn btn-danger " onClick={() => deleteUser(user.id)}>Delete</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Home;