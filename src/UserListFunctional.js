import { useState, useEffect } from "react";

function UserListFunctional() {
    const [users, setUsers] = useState([]); // initial users value is empty array
    /*
        Class component - this.state, this.setState({}) to update state
        Functional component - users, setUsers method to update state
    */

    useEffect(() => {
        // Call GET API and update state
        fetch('http://localhost:4000/users')
            .then((response) => response.json())
            .then((json) => setUsers(json)); // update users
    }, []) // will run once

    return <>
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