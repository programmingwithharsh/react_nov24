import bar from "./Title.module.css";
import { useNavigate } from "react-router-dom";

function Title(props2) {
    // console.log("Title Component", props2);
    const navigate = useNavigate();

    const gotToProducts = () => {
        navigate("/products");
    }

    return <>
        <div className={bar.header}>
            <h1>Title Functional Component</h1>
        </div>
        <button type="button" className="btn btn-primary mt-2" onClick={gotToProducts}>Redirect to Products</button>
    </>
}

export default Title;