import Product from "./Product";
import Star from './Star';
import { Link } from "react-router-dom";

export default function ProductList(props) {
    return <>
        <h1>Product List Functional Component</h1>
        <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>productName</th>
                        <th>productCode</th>
                        <th>releaseDate</th>
                        <th>description</th>
                        <th>price</th>
                        <th>starRating</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((item, index) => (
                        <tr key={index}>
                            <td><img src={item.imageUrl} width="50" height="50" /></td>
                            <td><Link to={`/products/${item.productId}`}>{item.productName}</Link></td>
                            <td>{item.productCode}</td>
                            <td>{item.releaseDate}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.starRating}<Star /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <Product />
    </>
}