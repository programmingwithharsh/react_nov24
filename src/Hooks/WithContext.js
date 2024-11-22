import { createContext, useContext, useState } from "react";

const UserContext = createContext(); // Create context

const WithContext = () => {
    const [username, setUsername] = useState("Abinaya");

    return (<div>
        <h1>With Context Example</h1>
        <div>In Component 1, username is {username}</div>
        <UserContext.Provider value={username}>
            <C2 />
        </UserContext.Provider>
    </div>);
}

const C2 = () => {
    return <C3 />
}

const C3 = () => {
    return <C4 />
}

const C4 = () => {
    return <C5 />
}

const C5 = () => {
    const username = useContext(UserContext); // use Context
    return <>
        <div>In Component 5, username is {username}</div>
    </>
}

export default WithContext;