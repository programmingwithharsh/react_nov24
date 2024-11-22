import { useEffect, useState } from "react";

const UseCustomHook = (url) => {
    const [data, setData] = useState([]);// data is empty array

    useEffect(() => {
        // Call GET API and update state
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                console.log("Fetch", response);
                setData(response)
            }); // update users
    }, []) // will run once
    return [data];
}

export default UseCustomHook;