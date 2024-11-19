import { useParams } from "react-router-dom";

function ProductDetail() {
    let { id } = useParams();
    return (<h1>Product Detail page, id is {id}</h1>);
}

export default ProductDetail;