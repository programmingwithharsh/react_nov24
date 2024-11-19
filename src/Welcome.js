import React from "react";
// import "./Welcome.css";
import styles from "./Welcome.module.css";

class Welcome extends React.Component {

    constructor(props) { // lifecyle
        super(props);
        this.state = {
            username: "Kavitha",
        }
        console.log("Constructor lifecycle 1");
        // console.log("Welcome Component", this.props);
    }

    shouldComponentUpdate() {
        return true;
    }

    updateUsername = () => {
        this.setState({ // to update state, whenever state updates component rerender
            username: "Sanjeev"
        })
    }

    componentDidMount() { // lifecycle, after render, best place to make API calls
        // call API, response use this.setState
        console.log("ComponentDidMount lifecycle 3");
    }

    render() { // lifecyle
        console.log("Render lifecycle 2");
        // console.log(this.state);
        let myStyle = { color: "blue", backgroundColor: "yellow" };

        return (<div className={styles.containerDiv}>

            <h1>Welcome Component - State Username is {this.state.username}</h1>
            <button className="btn btn-primary" onClick={this.updateUsername}>Update Username</button>
            <h1>Welcome Component - Props Username is {this.props.username}</h1>
            <h1 className="innerDiv" style={{ color: "blue", backgroundColor: "yellow" }}>Welcome Class Component header 1</h1>
            <h2 style={myStyle}>Welcome Class Component header 2</h2>
            <h3>Welcome Class Component header 3</h3>
            <div className="innerDiv">Welcome Class Component div</div>
        </div>
        );
    }
}

export default Welcome;