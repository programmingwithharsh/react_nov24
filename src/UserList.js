import React from 'react';

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        // Call API and update state
        fetch('http://localhost:4000/users')
            .then((response) => response.json())
            .then((json) => this.setState({ // update users state
                users: json
            }));
    }

    render() {
        return (<>
            <h1>User List Component</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>);
    }
}

export default UserList;