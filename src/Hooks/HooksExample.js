import WithoutContext from "./WithoutContext";
import WithContext from "./WithContext";
import UseRefExample from "./UseRefExample";
import UseReducerHookExample from "./UseReducerExample";
import UseCustomHook from "./UseCustomHook";
const HooksExample = () => {
    const [data] = UseCustomHook("https://jsonplaceholder.typicode.com/users");
    const [data2] = UseCustomHook("https://jsonplaceholder.typicode.com/albums");

    return (<>
        <h1>Custom Hook Response - Users Data</h1>

        <ul>
            {data.map((item, index) => (
                <li key={index}>{item.name}</li>
            ))}
        </ul>

        <h1>Custom Hook Response - Albums Data</h1>

        <ul>
            {data2.map((item, index) => (
                <li key={index}>{item.title}</li>
            ))}
        </ul>

        <UseReducerHookExample />
        <UseRefExample />
        <WithoutContext />
        <WithContext />
    </>);
}

export default HooksExample;