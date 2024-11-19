import { useState, useEffect } from "react";
import axios from 'axios';
function UserListFunctional() {
    const [users, setUsers] = useState([]); // initial users value is empty array
    const [albums, setAlbums] = useState([]);
    /*
        Class component - this.state, this.setState({}) to update state
        Functional component - users, setUsers method to update state
    */

    useEffect(() => {
        // Call GET API and update state
        fetch('http://localhost:4000/users')
            .then((response) => response.json())
            .then((response) => {
                console.log("Fetch", response);
                setUsers(response)
            }
            ); // update users
    }, []) // will run once

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(function (response) {
                console.log("Axios", response);
                setAlbums(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }, []) // will run once

    return <>
        <h1>Albums List Component - Functional Component</h1>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {albums.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <h1>User List Component - Functional Component</h1>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>;
}

export default UserListFunctional;