import React from "react";
// import "./Welcome.css";
import styles from "./Welcome.module.css";

// class Welcome extends React.Component {
class Welcome extends React.PureComponent {

    constructor(props) { // lifecyle
        super(props);
        this.state = {
            username: "Kavitha",
        }
        console.log("Constructor lifecycle 1");
        // console.log("Welcome Component", this.props);
    }

    /*
    shouldComponentUpdate() {
        return true;
    }
    */

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

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


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