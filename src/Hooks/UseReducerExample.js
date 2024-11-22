import { useReducer } from "react";

const reducer = (state, action) => { // update state based on action
    switch (action) {
        case "increment":
            return state + 1;

        case "decrement":
            return state - 1;

        case "reset":
            return 0;

        default:
            return state
    }
}
/*
Reducer - reducer is function which update state based on action 
Action - actions is increment, decrement and reset
Call action inside view/component - dispatch method is responstive to call actions

*/
const UseReducerHookExample = () => {
    const [count, dispatch] = useReducer(reducer, 0); // initial value of count is 0, dispatch is a method
    // const [username, setUsername] = useState("Abinaya");
    return (<>
        <h1>Use Reducer Hook Example</h1>
        <p>Count is {count}</p>
        <button className="btn btn-primary m-2" onClick={() => dispatch("increment")}>Increment</button>
        <button className="btn btn-primary m-2" onClick={() => dispatch("decrement")}>Decrement</button>
        <button className="btn btn-primary m-2" onClick={() => dispatch("reset")}>Reset</button>
    </>);
}

export default UseReducerHookExample;