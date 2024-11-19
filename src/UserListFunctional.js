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
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>Edit | <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Delete
                        </button></td>
                    </tr>
                ))}
            </tbody>
        </table>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Confirm User Deletion</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you Sure?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">OK</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default UserListFunctional;