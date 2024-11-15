import bar from "./Title.module.css";

function Title(props2) {
    // console.log("Title Component", props2);
    return <div className={bar.header}>
        <h1>Title Functional Component</h1>
        <h1>props2 username is {props2.username}, and hobbies is {props2.interest[0]}, and He is living in {props2.birth.place} </h1>
    </div>
}

export default Title;