import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh
        console.log(event);
        console.log(event.target);

        /*
        Other ways to get form data
            let fullname = document.getElementById("fullname").value;
            let email = event.target.elements.email.value;
        */

        let user = {
            fullname: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            confirmPassword: event.target[3].value
        }
        console.log(user);
        /*
            JSON.stringify - convert object into string
            JSON.parse - convert string into object
        */
        let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []; // ternary operator
        users.push(user); // adding item inside array
        localStorage.setItem("users", JSON.stringify(users));
    }

    render() {
        return (<>
            <h1>Register</h1>

            <form onSubmit={this.handleSubmit} noValidate>
                Fullname <input type="text" />
                Email <input type="email" />
                Password <input type="password" />
                Confirm Password <input type="password" />
                <input type="submit" value="Register" />
            </form>
        </>);
    }
}

export default Register;