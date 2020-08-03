import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
  loadUsers();
    }, []);

    const loadUsers = async () => {
      const result = await axios.get("http://localhost:3003/users");
    setUser(result.data);
    }
    return (
            <div className="container">
            <div className="py-4">
             <h1>Home Page</h1>
             <table class="table border shadow ">
            <thead class="thead-dark">
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Id</th>
            {/* <th scope="col">Status</th> */}
            <th>Action</th>
            </tr>           
            </thead>
            <tbody>
            {
                users.map((user, index) => (
               <tr>
                  <th scope="row">{user.id}</th>
                <td>{user.name}</td> 
                <td>{user.lastname}</td> 
                <td>{user.email}</td> 
                {/* <td>{user.status}</td> */}
                <td>
                <Link class="btn btn-outline-primary mr-2">Edit</Link>
                <Link class="btn btn-danger mr-2">Delete</Link>
                </td>
               </tr>
                ))
            }
            </tbody>
            </table>
            </div> 
            </div>
    );
};

export default Home;