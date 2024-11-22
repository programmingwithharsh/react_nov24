import { useEffect, useRef } from "react";

// Uncontrolled component
const UseRefExample = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (<>
        <h1>UseRef Hook Example</h1>
        <input type="text" ref={inputRef} />
    </>);
}

export default UseRefExample;