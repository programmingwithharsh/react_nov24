import "./Product.scss";
import Star from './Star';
import { Link } from "react-router-dom";

export default function Product(props) {
    debugger
    let item = props.product;
    return <>
        <tr>
            <td><img src={item.imageUrl} width="50" height="50" /></td>
            <td><Link to={`/products/${item.productId}`}>{item.productName}</Link></td>
            <td>{item.productCode}</td>
            <td>{item.releaseDate}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.starRating}<Star /></td>
        </tr></>
}